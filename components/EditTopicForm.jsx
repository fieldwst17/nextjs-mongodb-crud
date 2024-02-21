"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Faild to updated");
      }
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 items-center">
      <h1 className="text-2xl text-center">แก้ไขหัวข้อ</h1>

      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border focus:outline-none rounded-md border-slate-500 px-5 py-2 w-full"
        type="text"
        placeholder="หัวข้อ"
      />

      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border focus:outline-none rounded-md border-slate-500 px-5 py-2 w-full"
        type="text"
        placeholder="รายละเอียด"
      />

      <div className="block justify-center items-center">
        <button className="bg-green-500 w-fit px-5 py-3 font-bold text-white rounded-md hover:bg-green-600">
          อัปเดตหัวข้อ
        </button>
      </div>
    </form>
  );
}
