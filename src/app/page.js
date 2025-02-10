"use client";

import ImageSlider from "./component/ImageSlider";
import { motion } from "framer-motion";


export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-10 p-5">
      <ImageSlider />
      <motion.div className="w-full max-w-6xl h-auto bg-gray-100 text-black grid grid-cols-2 items-center px-10 rounded-lg mb-6 mt-5"
        initial={{ opacity: 0, x: -50 }}  // เริ่มต้นจาง + เลื่อนไปทางซ้าย
        whileInView={{ opacity: 1, x: 0 }}  // เมื่ออยู่ใน viewport ให้แสดงเต็มที่
        transition={{ duration: 0.8 }}  // กำหนดความเร็วของแอนิเมชัน
        viewport={{ once: true }}  // เล่นแค่ครั้งเดียวเมื่อเห็น

        style={{
          backgroundImage: 'linear-gradient(to left, rgba(255, 255, 255, 0), #DDEB9D)',
          backgroundPosition: 'left',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="text-left">
          <h1 className="text-3xl font-bold">What is Lorem Ipsum?</h1>
          <p className="text-lg leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised
            in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
        </div> 
        <div className="flex justify-end">
          <img src="/img/world.png" alt="world" className="w-[60%] h-[60%] object-cover rounded-lg" />
        </div>
      </motion.div>

      <motion.div className="w-full max-w-6xl h-auto bg-gray-100 text-black grid grid-cols-2 items-center px-10 rounded-lg mb-6"
        initial={{ opacity: 0, x: 50 }}  // เริ่มต้นจาง + เลื่อนไปทางซ้าย
        whileInView={{ opacity: 1, x: 0 }}  // เมื่ออยู่ใน viewport ให้แสดงเต็มที่
        transition={{ duration: 0.8 }}  // กำหนดความเร็วของแอนิเมชัน
        viewport={{ once: true }}  // เล่นแค่ครั้งเดียวเมื่อเห็น

        style={{
          backgroundImage: 'linear-gradient(to left, rgba(255, 255, 255, 0),rgb(218, 219, 213))',
          backgroundPosition: 'left',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="flex justify-start">
          <img src="/img/spaceship.png" alt="spaceship" className="w-[50%] h-[50%] object-cover rounded-lg" />
        </div> 
        <div className="text-left">  <h1 className="text-3xl font-bold">Why do we use it?</h1>
          <p className="text-lg leading-relaxed">
            It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem Ipsum
            is that it has a more-or-less normal distribution of letters, as opposed to
            using 'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem Ipsum
            as their default model text, and a search for 'lorem ipsum' will uncover
            many web sites still in their infancy. Various versions have evolved over
            the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p></div> {/* คอลัมน์ที่ 2 (ข้อความตรงกลาง) */}
      </motion.div>
      <motion.div className="w-full max-w-6xl h-auto bg-gray-100 text-black grid grid-cols-2 items-center px-10 rounded-lg mb-6"
        initial={{ opacity: 0, x: -50 }}  // เริ่มต้นจาง + เลื่อนไปทางซ้าย
        whileInView={{ opacity: 1, x: 0 }}  // เมื่ออยู่ใน viewport ให้แสดงเต็มที่
        transition={{ duration: 0.8 }}  // กำหนดความเร็วของแอนิเมชัน
        viewport={{ once: true }}  // เล่นแค่ครั้งเดียวเมื่อเห็น

        style={{
          backgroundImage: 'linear-gradient(to left, rgba(255, 255, 255, 0),rgb(149, 216, 255)',
          backgroundPosition: 'left',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="text-left">
          <h1 className="text-3xl font-bold">Where can I get some?</h1>
          <p className="text-lg leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form, by injected humour,
            or randomised words which don't look even slightly believable.
            If you are going to use a passage of Lorem Ipsum, you need to be sure
            there isn't anything embarrassing hidden in the middle of text. All the
            Lorem Ipsum generators on the Internet tend to repeat predefined chunks
            as necessary, making this the first true generator on the Internet.
            It uses a dictionary of over 200 Latin words, combined with a handful
            of model sentence structures, to generate Lorem Ipsum which looks
            reasonable. The generated Lorem Ipsum is therefore always free from
            repetition, injected humour, or non-characteristic words etc.
          </p></div> 
        <div className="flex justify-end">
          <img src="/img/internet.png" alt="internet" className="w-[60%] h-[60%] object-cover rounded-lg" />
        </div> 
      </motion.div>
    </div >
  );
}
