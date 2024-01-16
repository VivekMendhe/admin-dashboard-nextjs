import Link from "next/link";
import { useId } from "react";
import { getUser } from "../page";
import DeleteUser from "@/app/components/DeleteUser";

const UserData = async ({ params }) => {
  const userList = getUser();
  //   console.log(await userList);
  const users = await userList;

  const id = params.userId;
  const user = users[id - 1];
  return (
    <div className="flex justify-center  items-center h-60">
      <div className="max-w-md p-6 mt-5 rounded-md shadow-md border border-x-white">
        <div className="">
          <button className="mb-4 hover:text-yellow-500">
            <Link href="/users">back &larr;</Link>
          </button>
          <button className="mb-4 gap-2 mr-2 float-end hover:text-blue-500">
            <Link href={`/users/${id}/update-user`}>update &rarr;</Link>
          </button>
          <DeleteUser id={user.id} />
        </div>
        <h1 className="text-2xl font-bold mb-4 hover:underline">User Detail</h1>
        <div className="mb-4">
          <p className="text-lg font-semibold">Name: {user.name}</p>
          <p className="text-lg font-semibold">Email: {user.email}</p>
          <p className="text-lg font-semibold">Password: {user.password}</p>
        </div>
      </div>
    </div>
  );
};

export default UserData;
