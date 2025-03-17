import React, { useEffect, useState } from "react";
import axios from "axios";
import L from "leaflet";
import logo from "../assest/logo-bach-khoa.jpg";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get("http://localhost:8080/get-contacts");
        setFeedbacks(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !message) {
      const error = "Please fill out all fields.";
      setErrorMessage(error);
      setSuccessMessage("");
      toast.error(error);
      return;
    }

    const phoneRegex = /^0\d{9}$/;
    if (!phoneRegex.test(phone)) {
      const error = "Phone number must have 10 digits and start with 0.";
      setErrorMessage(error);
      setSuccessMessage("");
      toast.error(error);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/submit-contact",
        { name, email, phone, message }
      );

      const success = response.data.message;
      setSuccessMessage(success);
      setErrorMessage("");
      toast.success(success);

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");

      const updatedFeedbacks = await axios.get(
        "http://localhost:8080/get-contacts"
      );
      setFeedbacks(updatedFeedbacks.data);
    } catch (error) {
      console.error("Error submitting form:", error);
      const errorMsg =
        error.response?.data?.message || "An error occurred. Please try again.";
      setErrorMessage(errorMsg);
      setSuccessMessage("");
      toast.error(errorMsg);
    }
  };

  const customIcon = L.icon({
    iconUrl: logo,
    iconSize: [30, 30],
    iconAnchor: [19, 38],
    popupAnchor: [0, -30],
  });

  const position = [21.0052029, 105.841562];

  return (
    <div className="p-5 bg-cover bg-center bg-no-repeat flex-grow pb-2">
  <h1 className="text-4xl font-bold text-left mb-3">☎️ Contact Us</h1>
  <p className="text-green-600 text-1xl mb-6">
    Please fill in the form below!
  </p>

  {/* Sử dụng flex để chia làm 2 phần */}
  <div className="flex flex-col md:flex-row gap-10">
    {/* Bên trái: Form */}
    <div className="flex-1 border-r pr-5">
      <form
        onSubmit={handleSubmit}
        className="py-4 flex-col gap-5"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-bold">
            🧑‍💻 Full Name:
          </label>
          <input
            type="text"
            id="fullname"
            placeholder="Customer Name"
            className="shadow-md px-6 py-2 border border-slate-300 w-full text-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 mt-3">
          <label htmlFor="email" className="font-bold">
            ✉️ Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Quan123@gmail.com"
            className="shadow-md px-6 py-2 border border-slate-300 w-full text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 mt-3">
          <label htmlFor="phone" className="font-bold">
            📞 Phone Number:
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="0987654321"
            className="shadow-md px-6 py-2 border border-slate-300 w-full text-black"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 mt-3">
          <label htmlFor="message" className="font-bold">
            📝 Your Feedback:
          </label>
          <textarea
            id="message"
            placeholder="Type your message here ..."
            className="shadow-md h-32 px-6 py-2 border border-slate-300 w-full text-black"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-green-700 text-white font-bold py-2 w-full rounded shadow-md mt-4"
        >
          Send
        </button>
      </form>
      {errorMessage && (
        <div className="bg-red-100 text-red-700 px-5 py-2 mt-4 rounded">
          {errorMessage}
        </div>
      )}
      {successMessage && (
        <div className="bg-green-100 text-green-700 px-5 py-2 mt-4 rounded">
          {successMessage}
        </div>
      )}
    </div>

    {/* Bên phải: Feedback và Map */}
    <div className="flex-1 pl-5">
      <h2 className="text-2xl font-bold mb-4">📢 Customer Feedback</h2>
      {loading ? (
        <p>Loading...</p>
      ) : feedbacks.length === 0 ? (
        <p>No feedbacks yet.</p>
      ) : (
        <div className="feedback-list overflow-y-auto max-h-44 border rounded-lg mb-6">
          {feedbacks.map((feedback) => (
            <div
              key={feedback._id}
              className="feedback-item border-b py-2 px-4 flex justify-between items-start"
            >
              <div>
                <p>
                  <strong>Full name:</strong> {feedback.name}
                </p>
                <p>
                  <strong>Email:</strong> {feedback.email}
                </p>
                <p>
                  <strong>Feedback:</strong> {feedback.message}
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Date:</strong>{" "}
                  {new Date(feedback.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Map */}
      <div>
        <h2 className="text-2xl font-bold mb-4">🏠 Address</h2>
        <p className="text-1xl mb-4">So 1 Dai Co Viet, Hai Ba Trung, Ha Noi</p>
        <div style={{ height: "300px", width: "100%" }}>
          <MapContainer
            className="overflow-hidden border rounded-lg"
            center={position}
            zoom={14}
            style={{ height: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={customIcon}>
              <Popup>So 1 Dai Co Viet, Hai Ba Trung, Ha Noi</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Contact;
