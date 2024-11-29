import Image from "next/image";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 via-blue-300 to-blue-200 text-black flex items-center justify-center px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl p-8 bg-white rounded-xl shadow-lg">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Profile Section */}
          <div className="text-center">
            <div className="relative w-40 h-40 mx-auto">
              <Image
                src="/image/KerBaaGame.png"
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
                className="rounded-full shadow-md"
              />
            </div>
            <h1 className="text-3xl font-bold mt-4">นาย บูรพา แสงทอง</h1>
            <p className="text-gray-600">นิสิตวิศวกรรมซอฟต์แวร์</p>
          </div>

          {/* Education Section */}
          <div className="p-6 bg-blue-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">ประวัติการศึกษา</h2>
            <p className="text-xl font-semibold">มหาวิทยาลัยพะเยา</p>
            <p className="mt-2">คณะเทคโนโลยีสารสนเทศและการสื่อสาร</p>
            <p className="mt-1">สาขาวิศวกรรมซอฟต์แวร์</p>
            <p className="mt-4 text-gray-600">ปี 2023-ปัจจุบัน</p>
          </div>

          {/* Skills Section */}
          <div className="p-6 bg-blue-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Programming: Python Java</li>
              <li>Web Development: HTML CSS javacript </li>
              <li>ทํางานร่วมกันเป็นทีมที่ดี</li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-start mt-24 space-y-8">
          {/* Top Section */}
          <div className="space-y-8">
            {/* About Me Section */}
            <div className="p-6 bg-blue-50 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">อธิบายเกี่ยวกับตัวฉัน</h2>
              <p>
                สวัสดีครับ ผม นายบูรพา แสงทอง กําลังศึกษาอยู่ชั้นปีที่ 2 สาขาวิศวกรรมซอฟต์แวร์
                อาชีพในฝันของที่อยากเป็นคือ Tester เพราะผมเป็นคนที่เขียนโค้ดไม่ค่อยเก่ง
              </p>
            </div>

            {/* Projects Section */}
            <div className="p-6 bg-blue-50 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">ผลงาน</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>ออกแบบทําแอพเคชั่นเกี่ยวกับเครื่องดื่มต่างๆ ใน Figma</li>
                <li>โปรเจ็คเกี่ยวกับเว็บไซต์ชื้อขาย art-toy</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="p-6 bg-blue-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p>Facebook: น้องเกอร์ บ้าเกม </p>
            <p>Email: 66022758@up.ac.th</p>
          </div>
        </div>
      </div>
    </div>
  );
}
