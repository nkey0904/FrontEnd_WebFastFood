import axios from "axios";

const API_URL = "http://localhost:5000/api/payment/create";  // Không cần `/create` nữa

export const createZaloPayPayment = async (orderId, amount) => {
  try {
    const response = await axios.post(API_URL, { orderId, amount });  // Gọi trực tiếp API_URL
    return response.data;
  } catch (error) {
    console.error("Payment Error:", error);
    return null;
  }
};
