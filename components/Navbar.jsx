import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3 rounded-md">
      <Link className="text-white font-bold " href={"/"}>
        CRUD App
      </Link>
      <Link className="bg-white p-2 rounded-md hover:" href={"/AddTopic"}>
        Add Topic
      </Link>
    </nav>
  );
}
