"use client";

import React from "react";
import Slider from "react-slick"; // นำเข้า react-slick
import { Button } from "@mui/material";

const ImageSlider = () => {
  const settings = {
    // dots: true, // แสดงจุดนำทาง
    infinite: true, // เลื่อนวนลูป
    speed: 1000, // ความเร็วในการเปลี่ยนภาพ
    slidesToShow: 1, // แสดงเพียง 1 ภาพต่อการเลื่อน
    slidesToScroll: 1, // เลื่อน 1 ภาพในแต่ละครั้ง
    autoplay: true, // เลื่อนอัตโนมัติ
    autoplaySpeed: 3500, // ระยะเวลาในการเลื่อน (3 วินาที)
    arrows: false, // ซ่อนลูกศร (ถ้าต้องการให้แสดงลูกศรสามารถตั้งเป็น true ได้)
  };

  return (
    <div className="w-screen h-[40rem] bg-[#DDET9D]">
      <Slider {...settings}>
        <div className="w-full h-full">
          <div className="w-full h-[40rem] bg-[#DDEB9D] text-black grid grid-cols-2 grid-rows-2 px-5 rounded-lg mb-6"
            style={{
              backgroundImage: 'linear-gradient(to left, rgba(255, 255, 255, 0), #DDEB9D), url("/img/office1.jpg")',
              backgroundPosition: 'left',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="text-left p-5">
              <h1 className="text-3xl font-bold">Home</h1>
              <p className="text-lg leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div> 

            <div className="text-left p-7 col-span-2 flex flex-col justify-end">
              <p className="text-lg leading-relaxed">
                <a href="/"><Button variant="contained">More</Button></a>
              </p>
              <br />
              <p className="text-lg leading-relaxed">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
              </p>
            </div> 
          </div>
        </div>
        <div className="w-full h-full"> {/* กำหนดให้แต่ละสไลด์มีขนาดเท่ากัน */}

          <div className="w-full h-[40rem] bg-blue-300 text-black grid grid-cols-2 grid-rows-2 px-5 rounded-lg mb-6"
            style={{
              backgroundImage: 'linear-gradient(to left, rgba(255, 255, 255, 0),rgb(218, 219, 213)), url("/img/office2.jpg")',
              backgroundPosition: 'left',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="text-left p-5">
              <h1 className="text-3xl font-bold">About</h1>
              <p className="text-lg leading-relaxed">
                It is a long established fact that a reader will be <br />
                distracted by the readable content of a page when looking at its layout.
              </p>
            </div>

            <div className="text-left p-7 col-span-2 flex flex-col justify-end">
              <p className="text-lg leading-relaxed">
              <a href="/about"><Button variant="contained">More</Button></a>
              </p>
              <br />
              <p className="text-lg leading-relaxed">
                The point of using Lorem <br />
                Ipsum is that it has a more-or-less normal distribution of letters.
              </p>
            </div> 
          </div>
        </div>
        <div className="w-full h-full"> 
          <div className="w-full h-[40rem] bg-gray-300 text-black grid grid-cols-2 grid-rows-2  px-5 rounded-lg mb-6"
            style={{
              backgroundImage: 'linear-gradient(to left, rgba(255, 255, 255, 0),rgb(149, 216, 255)), url("/img/office3.jpg")',
              backgroundPosition: 'left',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="text-left p-5">
              <h1 className="text-3xl font-bold">Contact</h1>
              <p className="text-lg leading-relaxed">
                There are many variations of passages of Lorem Ipsum available.
              </p>
            </div> 
            <div className="text-left p-7 col-span-2 flex flex-col justify-end">
              <p className="text-lg leading-relaxed">
              <a href="/contact"><Button variant="contained">More</Button></a>
              </p>
              <br />
              <p className="text-lg leading-relaxed">
                but the majority have suffered alteration in some form, by injected humour.
              </p>
            </div> 
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
