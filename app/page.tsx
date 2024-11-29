"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/data");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/image/bg1.png')",
      }}
    >
      <div className="text-center flex flex-col items-center bg-white bg-opacity-90 rounded-lg shadow-xl p-8 max-w-lg">
        {/* Welcome Message */}
        <h1
          className="mb-6 text-4xl font-bold text-blue-800"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          ยินดีต้อนรับสู่ Portfolio การเรียนรู้
        </h1>
        <p
          className="mb-8 text-lg text-gray-700"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          สร้างแรงบันดาลใจและแบ่งปันการเดินทางการเรียนรู้ของฉัน
        </p>

        {/* Button */}
        <button
          onClick={handleClick}
          className="px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-full shadow-lg hover:from-green-300 hover:to-blue-400 transform transition duration-300 focus:outline-none focus:ring-4 focus:ring-green-200"
        >
          ดูข้อมูล Portfolio
        </button>
      </div>
    </div>
  );
}
