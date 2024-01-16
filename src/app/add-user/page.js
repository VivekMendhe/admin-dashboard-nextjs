"use client";

import { useState } from "react";

const AddUser = () => {
  const [data, setData] = useState({
    id: "",
    petId: "",
    quantity: "",
    shipDate: "",
    status: "",
    complete: false,
  });

  const [errors, setErrors] = useState({
    id: "",
    petId: "",
    quantity: "",
    shipDate: "",
    status: "",
    complete: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle checkbox separately
    if (type === "checkbox") {
      setData({ ...data, [name]: checked });
    } else {
      setData({ ...data, [name]: value });
      // Reset validation error when user starts typing again
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async () => {
    // Perform validation before submitting the form
    const newErrors = {};

    // Example: Check if 'id' is empty
    if (!data.id.trim()) {
      newErrors.id = "ID is required";
    }

    // You can add more validation rules for other fields...

    if (Object.keys(newErrors).length > 0) {
      // If there are validation errors, update the state
      setErrors(newErrors);
    } else {
      // If no errors, proceed with form submission

      if (data.complete == true) {
        // console.log("Form submitted:", data);
        let response = await fetch("http://localhost:3000/api/users", {
          method: "POST",
          body: JSON.stringify(data),
        });
        if (response.ok) {
          response = await response.json();
          console.log(response);
          // Reset form data
          setData({
            id: "",
            petId: "",
            quantity: "",
            shipDate: "",
            status: "",
            complete: false,
          });
        }
      } else {
        console.log("Please select box");
      }

      // Reset validation errors
      setErrors({
        id: "",
        petId: "",
        quantity: "",
        shipDate: "",
        status: "",
        complete: "",
      });
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-gray-300 font-extrabold text-center text-[30px]  my-5">
        Add User
      </h1>
      <div className="flex flex-col items-center">
        <input
          name="id"
          value={data.id}
          onChange={handleChange}
          type="text"
          className=" bg-slate-950  h-10 w-80 border px-2 border-slate-400 mb-5 rounded-md"
          placeholder="enter id"
        />
        <span className="text-red-500 text-sm">{errors.id}</span>

        <input
          name="petId"
          value={data.petId}
          onChange={handleChange}
          type="text"
          className=" bg-slate-950  h-10 w-80 border px-2 border-slate-400 mb-5 rounded-md"
          placeholder="enter petId"
        />
        <span className="text-red-500 text-sm">{errors.petId}</span>

        <input
          name="quantity"
          value={data.quantity}
          onChange={handleChange}
          type="text"
          className=" bg-slate-950  h-10 w-80 border px-2 border-slate-400 mb-5 rounded-md"
          placeholder="enter quantity"
        />
        <span className="text-red-500 text-sm">{errors.quantity}</span>

        <input
          name="shipDate"
          value={data.shipDate}
          onChange={handleChange}
          type="date"
          className=" bg-slate-950  h-10 w-80 border px-2 border-slate-400 mb-5 rounded-md"
          placeholder="enter ship date"
        />
        <span className="text-red-500 text-sm">{errors.shipDate}</span>

        <input
          name="status"
          value={data.status}
          onChange={handleChange}
          type="text"
          className=" bg-slate-950  h-10 w-80 border  px-2 border-slate-400 mb-5 rounded-md"
          placeholder="enter status"
        />
        <span className="text-red-500 text-sm">{errors.status}</span>

        <div className="flex left-0 items-start mb-5">
          <input
            name="complete"
            checked={data.complete}
            onChange={handleChange}
            type="checkbox"
            className="bg-slate-950 h-6 w-6 border border-slate-400 rounded-md mr-2"
          />
          <span className="text-red-500 text-sm">{errors.complete}</span>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddUser;
