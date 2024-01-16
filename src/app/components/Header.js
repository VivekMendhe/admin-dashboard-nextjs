import Link from "next/link";

const Header = () => {
  return (
    <div className=" h-20 flex justify-center items-center border-b border-b-orange-300 mb-5">
      <ul className=" flex justify-center items-center gap-x-3 font-bold  ">
        <li className="hover:text-blue-600 hover:underline hover:text-[20px] ">
          <Link href="/users">Users</Link>
        </li>
        <li className="hover:text-blue-600 hover:underline hover:text-[20px] active:text-blue-600">
          <Link href="/admin">Admin</Link>
        </li>
        <li className="hover:text-blue-600 hover:underline hover:text-[20px] active:text-blue-600">
          <Link href="/add-user">Add-User</Link>
        </li>
        <li className="hover:text-yellow-500 hover:underline hover:text-[20px] active:text-blue-600">
          <Link href="/products">Products</Link>
        </li>
        <li className="hover:text-yellow-500 hover:underline hover:text-[20px] active:text-blue-600">
          <Link href="/products/add-products">Add Products</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
