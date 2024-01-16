"use client";

import Link from "next/link";

const DeleteUser = ({ id }) => {
  const userId = id;
  //   console.log(userId);
  const deleteUser = async () => {
    let result = await fetch(`http://localhost:3000/api/users/${userId}`, {
      method: "DELETE",
    });
    result = await result.json();
    if (result) {
      alert("User deleted successfully");
    }
  };
  return (
    <>
      <button
        onClick={deleteUser}
        className="mb-4 ml-5 gap-2 hover:text-red-500"
      >
        DELETE
      </button>
    </>
  );
};

export default DeleteUser;
