"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import DeleteProduct from "../components/DeleteProduct";

const Products = () => {
  const [products, setProducts] = useState([]);

  // Assuming you fetch and set the products data in the useEffect hook
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let data = await fetch("http://localhost:3000/api/products", {
      method: "GET",
      cache: "no-cache",
    });
    if (data.ok) {
      data = await data.json();
      setProducts(data);
    }
  };
  return (
    <div className="text-center">
      <h1 className="text-yellow-500 text-[30px] underline">Products Page</h1>
      <div className="flex justify-center  mt-5 ">
        <table className="table-auto w-[70%] rounded-lg border-collapse  border border-gray-900">
          <thead>
            <tr className=" text-white">
              <th className="py-2">Sr</th>
              <th className="py-2">Name</th>
              <th className="py-2">Price</th>
              <th className="py-2">Category</th>
              <th className="py-2">User ID</th>
              <th className="py-2">Company</th>
              <th className="py-2">Job</th>
              <th className="py-2">Job</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-900" : ""}>
                <td className="py-2">{index + 1}</td>
                <td className="py-2">{product.name}</td>
                <td className="py-2">{product.price}</td>
                <td className="py-2">{product.category}</td>
                <td className="py-2">{product.userId}</td>
                <td className="py-2">{product.company}</td>
                <td className="py-2 hover:text-blue-600 hover:cursor-pointer">
                  <button>
                    <Link href={`/products/${product._id}`}> update</Link>
                  </button>
                </td>
                <td className="py-2 hover:text-red-600 hover:cursor-pointer">
                  {/* <button>delete</button> */}
                  <DeleteProduct id={product._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
