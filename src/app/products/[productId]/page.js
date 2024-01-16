"use client";
import React, { useEffect, useState } from "react";

const UpdateProduct = ({ params }) => {
  let id = params.productId;
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    userId: "",
    company: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    let data = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "GET",
    });
    data = await data.json();
    setFormData(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform actions with the form data, such as sending it to an API
    console.log("Form data submitted:", formData);

    let data = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(formData),
    });
    if (data.ok) {
      data = await data.json();
      console.log(data);
    }
  };

  return (
    <>
      <h1 className="text-yellow-500 text-[30px] text-center underline">
        Update Products
      </h1>
      <div className="flex justify-center  h-screen">
        <form onSubmit={handleSubmit} className="mt-5 w-[50%] text-center">
          <div className="mb-3">
            <label
              htmlFor="name"
              className="block text-sm font-semibold float-start ml-3 text-gray-600"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-10 px-3 bg-black border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="price"
              className="block text-sm font-semibold float-start ml-3 text-gray-600"
            >
              Price:
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full h-10 px-3 bg-black border  border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="category"
              className="block text-sm font-semibold float-start ml-3 text-gray-600"
            >
              Category:
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full h-10 px-3 bg-black border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="userId"
              className="block text-sm font-semibold float-start ml-3 text-gray-600"
            >
              User ID:
            </label>
            <input
              type="text"
              id="userId"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              className="w-full h-10 px-3 bg-black border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="company"
              className="block text-sm font-semibold float-start ml-3 text-gray-600"
            >
              Company:
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full h-10 px-3 bg-black border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-2 h-10 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateProduct;
