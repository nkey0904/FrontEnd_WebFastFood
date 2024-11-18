import React from "react";
import { TbH1 } from "react-icons/tb";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra nếu bất kỳ trường nào trống
    if (!name || !email || !phone || !message) {
      const error = "Please fill out all fields.";
      setErrorMessage(error);
      setSuccessMessage(""); // Xóa thông báo thành công khi có lỗi
      alert(error);
      return;
    }

    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Phone: ", phone);
    console.log("Message: ", message);

    // Hiển thị thông báo thành công
    const success = "Your message has been sent successfully!";
    setSuccessMessage(success);
    setErrorMessage(""); // Xóa thông báo lỗi khi thành công
    alert(success);

    // Reset form sau khi gửi
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="p-5 max-w-3xl">
      <h1 className="text-4xl font-bold ">Contact Us</h1>
      <p>Please fill in the form below</p>

      <form
        onSubmit={handleSubmit}
        className="py-4 mt-4 border-t flex-col gap-5"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="fullname"
            placeholder="Nguyen Anh Quan"
            className="shadow-md px-6 py-2 border border-slate-300 w-5/6"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2 mt-3">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="nguyenanhquan@gmail.com"
            className="shadow-md px-6 py-2 border border-slate-300 w-5/6"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2 mt-3">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            placeholder="0987654321"
            className="shadow-md px-6 py-2 border border-slate-300 w-5/6"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2 mt-3">
          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            placeholder="Type your message here ..."
            className="shadow-md h-32 px-6 py-2 border border-slate-300 w-5/6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-green-700 text-white font-bold py-2 w-5/6 rounded shadow-md mt-4"
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

      <div>
        <h1 className="text-2xl font-"> Address</h1>
      </div>
    </div>
  );
};
export default Contact;
