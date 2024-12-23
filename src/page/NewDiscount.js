import React, { useState } from "react";
import { toast } from "react-hot-toast";

const categories = [
  "pizza",
  "burger",
  "salad",
  "drink",
  "friedfood",
  "cake",
  "ice-cream",
  "rice",
];

const NewDiscount = () => {
  const [data, setData] = useState({
    code: "",
    type: "",
    value: "",
    startDate: "",
    endDate: "",

    timeFrame: { start: "", end: "" },
    minimumOrderValue: "",
    minimumItems: "",
    applicableCategories: [],
    usageLimit: "",
  });

  const [errors, setErrors] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTimeChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      timeFrame: { ...prev.timeFrame, [name]: value },
    }));
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setData((prev) => ({
      ...prev,
      applicableCategories: checked
        ? [...prev.applicableCategories, value]
        : prev.applicableCategories.filter((category) => category !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      code,
      type,
      value,
      startDate,
      endDate,

      timeFrame,
      minimumOrderValue,
      minimumItems,
      applicableCategories,
      usageLimit,
    } = data;

    // Validation logic
    const newErrors = {};

    if (!code) newErrors.code = "Discount Code is required.";
    if (!type) newErrors.type = "Discount Type is required.";
    if (!value) newErrors.value = "Discount Value is required.";
    if (!startDate) newErrors.startDate = "Start Date is required.";
    if (!endDate) newErrors.endDate = "End Date is required.";

    if (!timeFrame.start || !timeFrame.end)
      newErrors.timeFrame = "Time Frame is required.";
    if (!minimumOrderValue)
      newErrors.minimumOrderValue = "Minimum Order Value is required.";
    if (!minimumItems) newErrors.minimumItems = "Minimum Items are required.";
    if (applicableCategories.length === 0)
      newErrors.applicableCategories = "Please select at least one category.";
    if (!usageLimit) newErrors.usageLimit = "Usage Limit is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill in all required fields.");
      return;
    }

    setErrors({}); // Clear errors if validation passes

    try {
      console.log("Sending data:", data); // Debugging purpose

      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMIN}/uploadDiscount`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!fetchData.ok) {
        const errorResponse = await fetchData.json();
        console.error("Error response from server:", errorResponse);
        throw new Error(
          errorResponse.message || `HTTP error! status: ${fetchData.status}`
        );
      }

      const fetchRes = await fetchData.json();
      toast.success(fetchRes.message || "Discount added successfully!");

      // Reset form state
      setData({
        code: "",
        type: "",
        value: "",
        startDate: "",
        endDate: "",

        timeFrame: { start: "", end: "" },
        minimumOrderValue: "",
        minimumItems: "",
        applicableCategories: [],
        usageLimit: "",
      });
    } catch (error) {
      console.error("Error uploading discount:", error);
      toast.error("Failed to add discount. Please try again.");
    }
  };

  return (
    <div className="p-4">
      <form
        className="m-auto w-full max-w-md shadow flex flex-col p-3 bg-white rounded-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold text-center mb-4">
          Create New Discount
        </h2>

        <label htmlFor="code">Discount Code</label>
        <input
          type="text"
          name="code"
          className="bg-slate-200 p-2 my-1 rounded"
          onChange={handleOnChange}
          value={data.code}
          placeholder="Enter discount code"
        />
        {errors.code && <p className="text-red-500">{errors.code}</p>}

        <label htmlFor="type">Discount Type</label>
        <select
          className="bg-slate-200 p-2 my-1 rounded"
          id="type"
          name="type"
          onChange={handleOnChange}
          value={data.type}
        >
          <option value="">Select discount type</option>
          <option value="percentage">Percentage</option>
          <option value="fixed">Fixed Amount</option>
        </select>
        {errors.type && <p className="text-red-500">{errors.type}</p>}

        <label htmlFor="value">Discount Value</label>
        <input
          type="text"
          name="value"
          className="bg-slate-200 p-2 my-1 rounded"
          onChange={handleOnChange}
          value={data.value}
          placeholder="Enter discount value (e.g., 10%, $50)"
        />
        {errors.value && <p className="text-red-500">{errors.value}</p>}

        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          name="startDate"
          className="bg-slate-200 p-2 my-1 rounded"
          onChange={handleOnChange}
          value={data.startDate}
        />
        {errors.startDate && <p className="text-red-500">{errors.startDate}</p>}

        <label htmlFor="endDate">Expiration Date</label>
        <input
          type="date"
          name="endDate"
          className="bg-slate-200 p-2 my-1 rounded"
          onChange={handleOnChange}
          value={data.endDate}
        />
        {errors.endDate && <p className="text-red-500">{errors.endDate}</p>}

        <label htmlFor="timeFrame">Time Frame</label>
        <div className="flex space-x-2">
          <input
            type="time"
            name="start"
            className="bg-slate-200 p-2 my-1 rounded w-1/2"
            onChange={handleTimeChange}
            value={data.timeFrame.start}
            placeholder="Start Time"
          />
          <input
            type="time"
            name="end"
            className="bg-slate-200 p-2 my-1 rounded w-1/2"
            onChange={handleTimeChange}
            value={data.timeFrame.end}
            placeholder="End Time"
          />
        </div>
        {errors.timeFrame && <p className="text-red-500">{errors.timeFrame}</p>}

        <label>Applicable Categories</label>
        <div className="flex flex-wrap">
          {categories.map((category) => (
            <div key={category} className="flex items-center mr-2 mb-2">
              <input
                type="checkbox"
                id={category}
                value={category}
                onChange={handleCategoryChange}
                checked={data.applicableCategories.includes(category)}
                className="mr-1"
              />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </div>
        {errors.applicableCategories && (
          <p className="text-red-500">{errors.applicableCategories}</p>
        )}

        <label htmlFor="minimumOrderValue">Minimum Order Value</label>
        <input
          type="number"
          name="minimumOrderValue"
          className="bg-slate-200 p-2 my-1 rounded"
          onChange={handleOnChange}
          value={data.minimumOrderValue}
          placeholder="Enter minimum order value"
        />
        {errors.minimumOrderValue && (
          <p className="text-red-500">{errors.minimumOrderValue}</p>
        )}

        <label htmlFor="minimumItems">Minimum Items</label>
        <input
          type="number"
          name="minimumItems"
          className="bg-slate-200 p-2 my-1 rounded"
          onChange={handleOnChange}
          value={data.minimumItems}
          placeholder="Enter minimum items required"
        />
        {errors.minimumItems && (
          <p className="text-red-500">{errors.minimumItems}</p>
        )}

        <label htmlFor="usageLimit">Usage Limit</label>
        <input
          type="number"
          name="usageLimit"
          className="bg-slate-200 p-2 my-1 rounded"
          onChange={handleOnChange}
          value={data.usageLimit}
          placeholder="Enter usage limit (e.g., 100)"
        />
        {errors.usageLimit && (
          <p className="text-red-500">{errors.usageLimit}</p>
        )}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white text-lg my-2 font-medium p-2 rounded"
        >
          Save Discount
        </button>
      </form>
    </div>
  );
};

export default NewDiscount;
