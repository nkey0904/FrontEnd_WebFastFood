import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../component/CartProduct";
import emptyCartImage from "../assest/empty.gif";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createZaloPayPayment } from "../page/ZaloPayService";
import { v4 as uuidv4 } from "uuid";
import { resetCart } from "../redux/productSlide"; // ✅ dùng resetCart có sẵn


const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // ✅ INIT DISPATCH

  const productCartItem = useSelector((state) => state.product.cartItem);
  const user = useSelector((state) => state.user);

  const [selectedDiscount, setSelectedDiscount] = useState(null);
  const [discountValue, setDiscountValue] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [availableDiscounts, setAvailableDiscounts] = useState([]);

  const totalPrice = productCartItem.reduce((acc, curr) => {
    return acc + parseFloat(curr.total); // Ensure numeric
  }, 0);

  const totalQty = productCartItem.reduce((acc, curr) => {
    return acc + parseInt(curr.qty);
  }, 0);

  // // ✅ Check nếu thanh toán thành công từ localStorage
  // useEffect(() => {
  //   const paymentSuccess = sessionStorage.getItem("paymentSuccess");
  //   if (paymentSuccess === "true") {
  //     toast.success("Đơn hàng của bạn đã hoàn tất!");
  //     dispatch(resetCart()); // ✅ gọi action resetCart
  //     sessionStorage.removeItem("paymentSuccess"); // ✅ xóa flag
  //     setTimeout(() => {
  //       navigate("/"); // ✅ chuyển hướng về trang chủ
  //     }, 3000);
  //   }
  // }, [dispatch, navigate]);

  // Fetch discounts from backend
  useEffect(() => {
    const fetchDiscounts = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_DOMIN}/discounts`
        );

        if (!response.ok) {
          console.error("Failed to fetch discounts:", response.statusText);
          return;
        }

        const data = await response.json();
        setAvailableDiscounts(data); // Store available discounts
      } catch (error) {
        console.error("Error fetching discounts:", error);
      }
    };

    fetchDiscounts();
  }, []);

  const handleDiscountChange = (event) => {
    const selectedCode = event.target.value;
    const discount = availableDiscounts.find((d) => d.code === selectedCode);

    setSelectedDiscount(discount);
  };

  const handleDiscountApply = () => {
    if (!selectedDiscount) {
      setErrorMessage("Vui lòng chọn một mã giảm giá.");
      setDiscountValue(0);
      return;
    }

    // Check current date is within start and end date
    const currentDate = new Date();
    const startDate = new Date(selectedDiscount.startDate);
    const endDate = new Date(selectedDiscount.endDate);

    if (currentDate < startDate || currentDate > endDate) {
      setErrorMessage(
        `Mã giảm giá này chỉ áp dụng từ ${startDate.toLocaleDateString()} đến ${endDate.toLocaleDateString()}.`
      );
      setDiscountValue(0);
      return;
    }

    // Check minimum order value
    if (totalPrice < selectedDiscount.minimumOrderValue) {
      setErrorMessage(
        `Giá trị đơn hàng tối thiểu để áp dụng mã giảm giá này là $${selectedDiscount.minimumOrderValue}.`
      );
      setDiscountValue(0);
      return;
    }

    // Check minimum items in cart
    if (totalQty < selectedDiscount.minimumItems) {
      setErrorMessage(
        `Số lượng sản phẩm tối thiểu để áp dụng mã giảm giá này là ${selectedDiscount.minimumItems}.`
      );
      setDiscountValue(0);
      return;
    }

    // Check applicable categories
    const applicableItems = productCartItem.filter((item) =>
      selectedDiscount.applicableCategories?.includes(item.category)
    );

    if (applicableItems.length === 0) {
      setErrorMessage("Mã giảm giá không áp dụng cho sản phẩm trong giỏ hàng.");
      setDiscountValue(0);
      return;
    }

    // Calculate discount
    let discountAmount = 0;

    if (selectedDiscount.type === "percentage") {
      const applicableTotal = applicableItems.reduce(
        (acc, item) => acc + parseFloat(item.total),
        0
      );
      // Kiểm tra nếu giá trị giảm giá phần trăm hợp lệ (0-100)
      if (selectedDiscount.value <= 0 || selectedDiscount.value > 100) {
        setErrorMessage("Giá trị phần trăm giảm giá không hợp lệ.");
        setDiscountValue(0);
        return;
      }

      // Tính giảm giá chính xác
      discountAmount = (applicableTotal * selectedDiscount.value) / 100;

      // Đảm bảo giảm giá không vượt quá tổng số tiền
      discountAmount = Math.min(discountAmount, applicableTotal);

      // Ensure the discount doesn't exceed applicable total
      discountAmount = Math.min(discountAmount, applicableTotal);
    } else if (selectedDiscount.type === "fixed") {
      discountAmount = selectedDiscount.value;
    }

    setDiscountValue(discountAmount);
    setErrorMessage("");
    toast.success("Đã áp dụng mã giảm giá thành công!");
  };

  const handlePayment = async () => {
    if (!user.email) {
      toast.error("Bạn chưa đăng nhập!");
      setTimeout(() => navigate("/login"), 2000);
      return;
    }

    try {
      const finalAmount = totalPrice - discountValue;
      if (finalAmount <= 0) {
        toast.error("Số tiền sau giảm giá không hợp lệ.");
        return;
      }

      const orderId = `ORDER_${uuidv4()}`;
      const response = await createZaloPayPayment(orderId, finalAmount);

      // Kiểm tra response từ server
      if (response?.return_code === 1 && response?.zp_trans_token) {
        toast.success("Đang chuyển hướng đến ZaloPay...");
        // Mở một tab mới và điều hướng đến trang thanh toán của ZaloPay
        window.location.href = response.order_url || response.cashier_order_url;
      } else {
        toast.error("Thanh toán qua ZaloPay thất bại.");
      }
    } catch (error) {
      console.error("Lỗi thanh toán:", error);
      toast.error("Đã xảy ra lỗi khi thanh toán.");
    }
  }

    return (
      <div className="p-2 md:p-4">
        <h2 className="text-lg md:text-2xl font-bold text-slate-600">
          Giỏ Hàng Của Bạn
        </h2>
        {productCartItem[0] ? (
          <div className="my-4 flex gap-3">
            <div className="w-full max-w-3xl">
              {productCartItem.map((e1) => (
                <CartProduct
                  key={e1._id}
                  id={e1._id}
                  name={e1.name}
                  image={e1.image}
                  category={e1.category}
                  qty={e1.qty}
                  total={e1.total}
                  price={e1.price}
                />
              ))}
            </div>
            <div className="w-full max-w-md ml-auto bg-white shadow rounded p-4">
              <h2 className="bg-blue-500 text-white p-2 text-lg font-bold text-center rounded">
                Tóm Tắt
              </h2>
              <div className="flex justify-between items-center py-2 text-lg border-b">
                <p className="text-gray-700">Tổng Số Lượng</p>
                <p className="font-bold text-gray-900">{totalQty}</p>
              </div>

              <div className="flex justify-between items-center py-2 text-lg border-b">
                <p className="text-gray-700">Tổng Giá</p>
                <p className="font-bold">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(totalPrice)}
                </p>
              </div>

              <div className="flex justify-between items-center py-2 text-lg border-b">
                <p className="text-gray-700">Giảm Giá</p>
                <p className="font-bold">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(discountValue)}
                </p>
              </div>

              <div className="flex justify-between items-center py-2 text-lg border-b">
                <p className="text-gray-700">Tổng Tiền Cuối Cùng</p>
                <p className="font-bold">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(totalPrice - discountValue)}
                </p>
              </div>

              <div className="my-4">
                <select
                  value={selectedDiscount ? selectedDiscount.code : ""}
                  onChange={handleDiscountChange}
                  className="border p-2 w-full rounded"
                >
                  <option value="">Chọn mã giảm giá</option>
                  {availableDiscounts.map((discount) => (
                    <option key={discount._id} value={discount.code}>
                      {discount.code} - Áp dụng:{" "}
                      {Array.isArray(discount.applicableCategories)
                        ? discount.applicableCategories.join(", ")
                        : "Không xác định"}
                    </option>
                  ))}
                </select>

                <button
                  onClick={handleDiscountApply}
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full font-bold"
                >
                  Áp Dụng Mã Giảm Giá
                </button>
                {errorMessage && (
                  <p className="text-red-500 mt-2 text-center">{errorMessage}</p>
                )}
              </div>

              <button
                className="bg-red-500 w-full text-lg font-bold py-2 text-white rounded"
                onClick={handlePayment}
              >
                Thanh Toán Qua ZaloPay
              </button>
            </div>
          </div>
        ) : (
          <div className="flex w-full justify-center items-center flex-col">
            <img
              src={emptyCartImage}
              alt="Empty Cart"
              className="w-full max-w-sm rounded-b"
            />
            <p className="text-slate-500 text-3xl font-bold">Giỏ Hàng Trống</p>
          </div>
        )}
      </div>
    );
  };

  export default Cart;
