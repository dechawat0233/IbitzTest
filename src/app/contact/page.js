"use client";

import React from 'react'
import { motion } from "framer-motion";
import { Facebook, YouTube, GitHub, LinkedIn, Phone, Mail } from "@mui/icons-material";

function page() {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-10 p-5">
            <motion.div className="w-full max-w-6xl h-auto bg-gray-100 justify-center text-black items-center px-10 rounded-lg mb-6 mt-5"
                initial={{ opacity: 0, y: -50 }}  // เริ่มต้นจาง + เลื่อนไปทางซ้าย
                whileInView={{ opacity: 1, y: 0 }}  // เมื่ออยู่ใน viewport ให้แสดงเต็มที่
                transition={{ duration: 0.8 }}  // กำหนดความเร็วของแอนิเมชัน
                viewport={{ once: true }}  // เล่นแค่ครั้งเดียวเมื่อเห็น
            >
                <h1 className='text-3xl font-bold text-center'>Contact</h1>
            </motion.div>
            <motion.div className="w-full max-w-6xl h-auto bg-gray-100 text-black grid grid-cols-3 items-center px-10 rounded-lg mb-6 mt-5"
                initial={{ opacity: 0, y: 50 }}  // เริ่มต้นจาง + เลื่อนไปทางซ้าย
                whileInView={{ opacity: 1, y: 0 }}  // เมื่ออยู่ใน viewport ให้แสดงเต็มที่
                transition={{ duration: 0.8 }}  // กำหนดความเร็วของแอนิเมชัน
                viewport={{ once: true }}  // เล่นแค่ครั้งเดียวเมื่อเห็น
            >
                <a
                    href="https://web.facebook.com/profile.php?id=100002037522804"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center border-2 border-[#DDEB9D] p-5 rounded-lg w-auto h-[12rem] m-2 hover:bg-gray-100 transition duration-300"
                >                    <Facebook className="text-3xl hover:text-blue-500 transition duration-300" />
                    <h1 className="text-xl font-bold hover:text-blue-500 transition" >Facebook</h1>
                    <p className="text-2lg leading-relaxed">
                        Decha Acr
                    </p>
                </a> {/* คอลัมน์ที่ 1 (ว่าง) */}
                <a
                    href="https://YouTube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center border-2 border-[#DDEB9D] p-5 rounded-lg w-auto h-[12rem] m-2 hover:bg-gray-100 transition duration-300"
                >
                    <YouTube className="text-3xl hover:text-red-500 transition duration-300" />
                    <h1 className="text-2xl font-bold hover:text-red-500 transition">YouTube</h1>
                    <p className="text-2lg leading-relaxed">
                        YouTube
                    </p>
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center border-2 border-[#DDEB9D] p-5 rounded-lg w-auto h-[12rem] m-2 hover:bg-gray-100 transition duration-300"
                >
                    <Phone className="text-3xl hover:text-purple-500 transition duration-300" />
                    <h1 className="text-2xl font-bold hover:text-purple-500 transition"  >เบอร์ติดต่อ</h1>
                    <p className="text-2lg leading-relaxed">
                        095-649-1027
                    </p>
                </a>
                <a
                    href="https://www.linkedin.com/in/dechawat-yutthanapakon-8009a9257/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center border-2 border-[#DDEB9D] p-5 rounded-lg w-auto h-[12rem] m-2 hover:bg-gray-100 transition duration-300"
                >
                    <LinkedIn className="text-3xl hover:text-blue-500 transition duration-300" />
                    <h1 className="text-2xl font-bold hover:text-blue-500 transition" >LinkedIn</h1>
                    <p className="text-2lg leading-relaxed">
                        Dechawat Yutthanapakon
                    </p>
                </a> {/* คอลัมน์ที่ 1 (ว่าง) */}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center border-2 border-[#DDEB9D] p-5 rounded-lg w-auto h-[12rem] m-2 hover:bg-gray-100 transition duration-300"
                >
                    <Mail className="text-3xl hover:text-yellow-500 transition duration-300" />
                    <h1 className="text-2xl font-bold hover:text-yellow-500 transition">E-mail</h1>
                    <p className="text-2lg leading-relaxed">
                    dechawatyuttha@gmail.com
                    </p>
                </a>
                <a
                    href="https://www.GitHub.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center border-2 border-[#DDEB9D] p-5 rounded-lg w-auto h-[12rem] m-2 hover:bg-gray-100 transition duration-300"
                >
                    <GitHub className="text-3xl hover:text-gray-500 transition duration-300" />
                    <h1 className="text-2xl font-bold hover:text-gray-500 transition" >GitHub</h1>
                    <p className="text-2lg leading-relaxed">
                        GitHub
                    </p>
                </a>
            </motion.div>


        </div >
    )
}

export default page