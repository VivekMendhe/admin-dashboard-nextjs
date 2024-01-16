"use client";

import { useRouter } from "next/navigation";

const DeleteProduct = ({ id }) => {
  const router = useRouter();
  const deleteProduct = async () => {
    let result = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "DELETE",
    });
    if (result.ok) {
      result = await result.json();
      console.log("User deleted successfully");
      router.push("/products");
    }
  };
  return (
    <>
      <button onClick={deleteProduct}>delete</button>
    </>
  );
};

export default DeleteProduct;
