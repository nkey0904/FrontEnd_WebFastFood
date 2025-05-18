// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";

// function PaymentResult() {
//   const navigate = useNavigate();
//   const searchParams = new URLSearchParams(useLocation().search);
//   const [status, setStatus] = useState("loading");
//   const [title, setTitle] = useState("Đang kiểm tra thanh toán...");
//   const paymentMethod = searchParams.get("paymentMethod");

//   useEffect(() => {
//     const checkPaymentStatus = async () => {
//       try {
//         console.log("Query params:", Object.fromEntries(searchParams));

//         if (!paymentMethod || paymentMethod !== "zalopay") {
//           setStatus("error");
//           setTitle("Phương thức thanh toán không hợp lệ.");
//           return;
//         }

//         const apptransid = searchParams.get("apptransid");
//         if (!apptransid) {
//           setStatus("error");
//           setTitle("Thiếu mã giao dịch ZaloPay.");
//           return;
//         }

//         // Gọi API backend để xác thực trạng thái
//         const { data } = await axios.get(`http://localhost:5000/api/payment/status/${apptransid}`);
//         console.log("Status response:", data);

//         if (data.status === 1) {
//           setStatus("success");
//           setTitle("Thanh toán thành công");
//         } else {
//           setStatus("error");
//           setTitle("Thanh toán thất bại hoặc bị hủy");
//         }
//       } catch (error) {
//         console.error("Check payment error:", error);
//         setStatus("error");
//         setTitle("Đã xảy ra lỗi, vui lòng thử lại sau.");
//       }
//     };

//     checkPaymentStatus();
//   }, [searchParams]);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <h1 className={`text-2xl font-bold mb-4 ${status === "success" ? "text-green-600" : "text-red-600"}`}>
//         {title}
//       </h1>
//       <p className="text-lg mb-6">
//         {status === "success"
//           ? "Cảm ơn bạn đã thanh toán. Đơn hàng sẽ được xử lý sớm."
//           : "Vui lòng kiểm tra lại hoặc liên hệ hỗ trợ qua hotline: 1900 561 558."}
//       </p>
//       <div>
//         <button
//           onClick={() => navigate("/")}
//           className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 transition"
//         >
//           Về trang chủ
//         </button>
//         <button
//           onClick={() => navigate("/cart")}
//           className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
//         >
//           Mua lại
//         </button>
//       </div>
//     </div>
//   );
// }

// export default PaymentResult;
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function PaymentResult() {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(useLocation().search);

  const [status, setStatus] = useState("loading");
  const [title, setTitle] = useState("Đang kiểm tra thanh toán...");

  const paymentMethod = searchParams.get("paymentMethod");
  const paymentStatus = searchParams.get("status");

  useEffect(() => {
    const handlePaymentResult = () => {
      if (!paymentMethod || paymentMethod !== "zalopay") {
        setStatus("error");
        setTitle("Phương thức thanh toán không hợp lệ.");
        return;
      }

      if (!paymentStatus) {
        setStatus("error");
        setTitle("Thiếu thông tin trạng thái thanh toán.");
        return;
      }

      if (paymentStatus === "1") {
        setStatus("success");
        setTitle("Thanh toán thành công");
        // // Lưu trạng thái thanh toán thành công vào sessionStorage
        // sessionStorage.setItem("paymentSuccess", "true");
      } else {
        setStatus("error");
        setTitle("Thanh toán thất bại hoặc bị hủy");
      }
    };

    handlePaymentResult();
  }, [paymentMethod, paymentStatus]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className={`text-2xl font-bold mb-4 ${status === "success" ? "text-green-600" : "text-red-600"}`}>
        {title}
      </h1>
      <p className="text-lg mb-6">
        {status === "success"
          ? "Cảm ơn bạn đã thanh toán. Đơn hàng sẽ được xử lý sớm."
          : "Vui lòng kiểm tra lại hoặc liên hệ hỗ trợ qua hotline: 1900 561 558."}
      </p>
      <div>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 transition"
        >
          Về trang chủ
        </button>
        <button
          onClick={() => navigate("/cart")}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
        >
          Mua lại
        </button>
      </div>
    </div>
  );
}

export default PaymentResult;
