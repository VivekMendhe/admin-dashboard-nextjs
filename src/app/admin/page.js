"use client";
import { useRef, useState } from "react";

const AdminPage = () => {
  const [file, setFile] = useState();
  const fileInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(file);

    const data = new FormData();
    data.set("file", file);

    let result = await fetch(`api/upload`, {
      method: "POST",
      body: data,
    });
    result = await result.json();
    console.log(result);

    setFile("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div>
      <h1 className="text-yellow-600 font-extrabold text-center text-[30px] underline">
        Admin Page
      </h1>
      <h1 className="m-5 text-center font-bold text-yellow-600">
        <span className="text-[30px]">U</span>pload Image
      </h1>
      <div className="flex  justify-center ">
        <form
          onSubmit={handleSubmit}
          className="border-b border-slate-300 px-3"
        >
          <label htmlFor="imageInput" className="sr-only">
            Upload Image
          </label>
          <input
            ref={fileInputRef}
            name="image"
            type="file"
            onChange={(e) => setFile(e.target.files?.[0])}
            className="bg-black text-white p-2 rounded-md border-none"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
