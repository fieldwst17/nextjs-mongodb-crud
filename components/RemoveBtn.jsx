"use client";

import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";
export default function RemoveBtn({ id }) {

  // Remove
  const removeTopic = async () => {
    const removeConfirmed = confirm(
      "ลบแล้วไม่สามารถเรียกคืนมาได้ ต้องการลบใช่หรือไม่ ?"
    );
        
    if (removeConfirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        window.location.reload()
      }
    }
  };

  return (
    <div>
      <button
        onClick={removeTopic}
        className="text-grey-400 hover:text-red-400"
      >
        <HiOutlineTrash size={24} />
      </button>
    </div>
  );
}
