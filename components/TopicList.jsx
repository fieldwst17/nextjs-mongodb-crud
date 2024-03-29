import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicList() {
  const { topics } = await getTopics();
  return (
    <>
      {/* Content */}
      {topics.map((item, index) => (
        <div
          key={index}
          className="p-4 border 
              border-slate-300 my-3 rounded-md 
              flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl underline underline-offset-2">
              {item.title}
            </h2>
            <div>รายละเอียด : {item.description}</div>
            <div>สร้างเมื่อ : {new Date(item.createdAt).toLocaleDateString()}</div>
            <div>อัปเดตหัวข้อเมื่อ : {new Date(item.updatedAt).toLocaleDateString()}</div>
          </div>

          {/* ICONS */}
          <div className="flex gap-2">
            <RemoveBtn id={item._id}/>
            <Link
              className="text-slate-400 hover:text-sky-400"
              href={`/editTopic/${item._id}`}
            >
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
