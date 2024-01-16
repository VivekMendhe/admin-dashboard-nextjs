import Link from "next/link";

export async function getUser() {
  let data = await fetch("http://localhost:3000/api/users");
  data = await data.json();
  return data;
}

const UserList = async () => {
  const users = await getUser();
  // console.log(users);
  return (
    <div>
      <h1 className="text-blue-600 font-extrabold text-center text-[30px] underline mb-5">
        User List
      </h1>
      {users.map((user) => (
        <div key={user.id} className="text-center">
          <h1 className="text-[30px] text-yellow-500 hover:underline">
            <Link href={`/users/${user.id}`}> {user.name}</Link>
          </h1>
        </div>
      ))}
    </div>
  );
};

export default UserList;
