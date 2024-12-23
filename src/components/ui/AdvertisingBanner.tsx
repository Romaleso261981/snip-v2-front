"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import image1 from "../../assets/galery/GaleryImg1.png";
import image2 from "../../assets/galery/GaleryImg2.png";
import image3 from "../../assets/galery/GaleryImg3.png";

const slides = [
  {
    id: 1,
    title: "Літні розпродажі колекцій",
    description: "Розпродаж! Знижки до 50%!",
    img: image1,
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50"
  },
  {
    id: 2,
    title: "Зимовий розпродаж колекцій",
    description: "Розпродаж! Знижки до 50%!",
    img: image2,
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50"
  },
  {
    id: 3,
    title: "Колекції весняних розпродажів",
    description: "Розпродаж! Знижки до 50%!",
    img: image3,
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50"
  }
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[calc(100vh-80px)] sm:m-h-full overflow-hidden relative">
      <div
        className="w-full h-full flex transition-transform ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map(slide =>
          <div
            className={`${slide.bg} flex-none w-full h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div className="h-1/2 w-full xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <p className="text-xl text-gold-light lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </p>
              <h1 className="text-5xl text-gold-dark lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="rounded-md border border-gold text-gold-dark py-3 px-4">
                  Замовити зараз
                </button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="h-1/2 w-full xl:w-1/2 xl:h-full relative">
              <Image
                src={slide.img}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        )}
      </div>
      <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 flex gap-4">
        {slides.map((slide, index) =>
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gold-dark cursor-pointer flex items-center justify-center ${current ===
            index
              ? "scale-150"
              : ""}`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index &&
              <div className="w-[6px] h-[6px] bg-gold-light rounded-full" />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;
