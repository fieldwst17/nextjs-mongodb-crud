import connectMongoDB from "@/lib/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

// Create สร้างรายการ
export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

// Read เรียกดูรายการทั้งหมด
export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

// Delete ลบรายการ
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic Deleted" }, { status: 200 });
}

