"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function addTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSumbit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("กรอกหัวข้อและรายละเอียด !!");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
        router.refresh()
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSumbit} className="flex flex-col gap-5 items-center">
      <h1 className="text-2xl text-center">เพิ่มหัวข้อ</h1>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border focus:outline-none rounded-md border-slate-500 px-5 py-2 w-full"
        type="text"
        placeholder="หัวข้อ"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border focus:outline-none rounded-md border-slate-500 px-5 py-2 w-full"
        type="text"
        placeholder="รายละเอียด"
      />
      <div className="block justify-center items-center">
        <button 
        type="submit"
        className="bg-green-500 w-fit px-5 py-3 font-bold text-white rounded-md hover:bg-green-600">
          เพิ่มหัวข้อ
        </button>
      </div>
    </form>
  );
}
