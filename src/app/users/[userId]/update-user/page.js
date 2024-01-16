"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const UpdateUser = ({ params }) => {
  let id = params.userId;
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    getUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const getUsers = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/users/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const userData = await response.json();
      setUser(userData[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    let response = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(user),
    });
    response = await response.json();
    console.log(response);
  };
  return (
    <div className="flex justify-center items-center h-60">
      <div className="max-w-md p-6 mt-5 rounded-md shadow-md border border-x-white">
        <div className="">
          <button className="mb-4">
            <Link href="/users">back &larr;</Link>
          </button>

          <button
            onClick={handleUpdate}
            className="mb-4 float-end hover:underline"
          >
            update
          </button>
        </div>
        <h1 className="text-2xl font-bold mb-4">User Detail</h1>
        {user && (
          <div className="mb-4 bg-black">
            <input
              name="name"
              className="text-lg font-semibold bg-black border-none focus:outline-none mb-2"
              value={user.name}
              onChange={handleChange}
            />
            <input
              name="email"
              className="text-lg font-semibold bg-black border-none focus:outline-none mb-2"
              value={user.email}
              onChange={handleChange}
            />
            <input
              name="password"
              className="text-lg font-semibold bg-black border-none focus:outline-none mb-2"
              value={user.password}
              onChange={handleChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateUser;
