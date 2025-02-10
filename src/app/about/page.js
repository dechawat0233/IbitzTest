"use client";

import React from 'react'
import { motion } from "framer-motion";
import { Home, Info, Work, ContactMail, School, Settings } from "@mui/icons-material";

function page() {

    const scrollToSectionHome = () => {
        document.getElementById("Home").scrollIntoView({ behavior: "smooth" });
    };

    const scrollToSectionInfo = () => {
        document.getElementById("Info").scrollIntoView({ behavior: "smooth" });
    };
    const scrollToSectionWork = () => {
        document.getElementById("Work").scrollIntoView({ behavior: "smooth" });
    };
    const scrollToSectionContactMail = () => {
        document.getElementById("ContactMail").scrollIntoView({ behavior: "smooth" });
    };
    const scrollToSectionSchool = () => {
        document.getElementById("School").scrollIntoView({ behavior: "smooth" });
    };
    const scrollToSectionSettings = () => {
        document.getElementById("Settings").scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-10 p-5">
            <motion.div className="w-full max-w-6xl h-auto bg-gray-100 justify-center text-black items-center px-10 rounded-lg mb-6 mt-5"
                initial={{ opacity: 0, y: -50 }}  // เริ่มต้นจาง + เลื่อนไปทางซ้าย
                whileInView={{ opacity: 1, y: 0 }}  // เมื่ออยู่ใน viewport ให้แสดงเต็มที่
                transition={{ duration: 0.8 }}  // กำหนดความเร็วของแอนิเมชัน
                viewport={{ once: true }}  // เล่นแค่ครั้งเดียวเมื่อเห็น
            >
                <h1 className='text-3xl font-bold text-center'>About us</h1>
            </motion.div>
            <motion.div className="w-full max-w-6xl h-auto bg-gray-100 text-black grid grid-cols-3 items-center px-10 rounded-lg mb-6 mt-5"
                initial={{ opacity: 0, y: 50 }}  // เริ่มต้นจาง + เลื่อนไปทางซ้าย
                whileInView={{ opacity: 1, y: 0 }}  // เมื่ออยู่ใน viewport ให้แสดงเต็มที่
                transition={{ duration: 0.8 }}  // กำหนดความเร็วของแอนิเมชัน
                viewport={{ once: true }}  // เล่นแค่ครั้งเดียวเมื่อเห็น
            >
                <div className="text-center border-2 border-[#DDEB9D] p-5 rounded-lg h-[12rem] w-auto m-2">
                    <Home className="text-3xl hover:text-blue-500 transition duration-300" onClick={scrollToSectionHome} />
                    <h1 className="text-xl font-bold hover:text-blue-500 transition" onClick={scrollToSectionHome}>The standard Lorem Ipsum passage</h1>
                    <p className="text-2lg leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div> {/* คอลัมน์ที่ 1 (ว่าง) */}
                <div className="text-center border-2 border-[#DDEB9D] p-5 rounded-lg w-auto h-[12rem] m-2" >
                    <Info className="text-3xl hover:text-green-500 transition duration-300" onClick={scrollToSectionInfo} />
                    <h1 className="text-2xl font-bold hover:text-green-500 transition"onClick={scrollToSectionInfo}>de Finibus Bonorum et Malorum</h1>
                    <p className="text-2lg leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className="text-center border-2 border-[#DDEB9D] p-5 rounded-lg w-auto h-[12rem] m-2">
                    <Work className="text-3xl hover:text-purple-500 transition duration-300" onClick={scrollToSectionWork} />
                    <h1 className="text-2xl font-bold hover:text-purple-500 transition" onClick={scrollToSectionWork} >1914 translation by H. Rackham</h1>
                    <p className="text-2lg leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className="text-center border-2 border-[#DDEB9D] p-5 rounded-lg w-auto h-[12rem] m-2 ">
                    <ContactMail className="text-3xl hover:text-red-500 transition duration-300" onClick={scrollToSectionContactMail} />
                    <h1 className="text-2xl font-bold hover:text-red-500 transition" onClick={scrollToSectionContactMail}>Where does it come from?</h1>
                    <p className="text-2lg leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div> {/* คอลัมน์ที่ 1 (ว่าง) */}
                <div className="text-center border-2 border-[#DDEB9D] p-5 rounded-lg w-auto h-[12rem] m-2">
                    <School className="text-3xl hover:text-yellow-500 transition duration-300" onClick={scrollToSectionSchool} />
                    <h1 className="text-2xl font-bold hover:text-yellow-500 transition" onClick={scrollToSectionSchool}>Where can I get some?</h1>
                    <p className="text-2lg leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className="text-center border-2 border-[#DDEB9D] p-5 rounded-lg w-auto h-[12rem] m-2">
                    <Settings className="text-3xl hover:text-gray-500 transition duration-300" onClick={scrollToSectionSettings} />
                    <h1 className="text-2xl font-bold hover:text-gray-500 transition" onClick={scrollToSectionSettings}>Why do we use it?</h1>
                    <p className="text-2lg leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
            </motion.div>

            <motion.div id="Home" className="w-full max-w-6xl h-auto bg-gray-100 text-black items-center px-10 rounded-lg mb-6"
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
                <div className="text-left" >
                    <img src="/img/spaceship.png" alt="spaceship" className="w-[10%] h-[10%] object-cover rounded-lg" />
                    <h1 className="text-3xl font-bold">The standard Lorem Ipsum passage</h1>
                    <p className="text-lg leading-relaxed">
                        It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout. The point of using Lorem Ipsum
                        is that it has a more-or-less normal distribution of letters, as opposed to
                        using 'Content here, content here', making it look like readable English.
                        Many desktop publishing packages and web page editors now use Lorem Ipsum
                        as their default model text, and a search for 'lorem ipsum' will uncover
                        many web sites still in their infancy. Various versions have evolved over
                        the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>
                </div> {/* คอลัมน์ที่ 2 (ข้อความตรงกลาง) */}
            </motion.div>
            <motion.div id="Info" className="w-full max-w-6xl h-auto bg-gray-100 text-black  items-center px-10 rounded-lg mb-6"
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
                    <img src="/img/internet.png" alt="internet" className="w-[10%] h-[10%] object-cover rounded-lg" />

                    <h1 className="text-3xl font-bold">de Finibus Bonorum et Malorum</h1>
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
                    </p></div> {/* คอลัมน์ที่ 1 (ข้อความซ้าย) */}
            </motion.div>
            <motion.div id="Work" className="w-full max-w-6xl h-auto bg-gray-100 text-black  items-center px-10 rounded-lg mb-6"
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
                <div className="text-left">
                    <img src="/img/spaceship.png" alt="spaceship" className="w-[10%] h-[10%] object-cover rounded-lg" />

                    <h1 className="text-3xl font-bold">1914 translation by H. Rackham</h1>
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
            <motion.div id="ContactMail" className="w-full max-w-6xl h-auto bg-gray-100 text-black  items-center px-10 rounded-lg mb-6"
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
                    <img src="/img/internet.png" alt="internet" className="w-[10%] h-[10%] object-cover rounded-lg" />

                    <h1 className="text-3xl font-bold">Where does it come from?</h1>
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
                    </p></div> {/* คอลัมน์ที่ 1 (ข้อความซ้าย) */}
            </motion.div>
            <motion.div id="School" className="w-full max-w-6xl h-auto bg-gray-100 text-black  items-center px-10 rounded-lg mb-6"
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
                <div className="text-left">
                    <img src="/img/spaceship.png" alt="spaceship" className="w-[10%] h-[10%] object-cover rounded-lg" />

                    <h1 className="text-3xl font-bold">Where can I get some?</h1>
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
            <motion.div id="Settings" className="w-full max-w-6xl h-auto bg-gray-100 text-black  items-center px-10 rounded-lg mb-6"
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
                    <img src="/img/internet.png" alt="internet" className="w-[10%] h-[10%] object-cover rounded-lg" />
                    <h1 className="text-3xl font-bold">Why do we use it?</h1>
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
                    </p></div> {/* คอลัมน์ที่ 1 (ข้อความซ้าย) */}
            </motion.div>
        </div >
    )
}

export default page