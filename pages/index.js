import React, { useState, useEffect } from "react";
import HomeLayout from "../layout/homepageLayout";
import Image from "next/image";
import Nav from "../components/Nav";

export default function Home({ ImagesArr }) {
  const [Counter, setCounter] = useState(0);
  const [Images, setImages] = useState(ImagesArr);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (Counter === Images.length - 1) {
        setCounter(0);
      } else {
        setCounter(Counter + 1);
      }
    }, 5000);
    return () => clearInterval(intervalId);
  });

  return (
    <>
      <Nav />
      <div className="relative max-full mx-auto h-screen">
        {Images.map((img, index) => {
          return Object.keys(img).map((key, index) => {
            const obj = img[key];
            return (
              <div
                className={`absolute cursor-pointer indexImageContainer ${
                  Counter === obj.counter ? "visible " : "invisible "
                }`}
                style={{
                  ...obj.css,
                  minWidth: obj.width,
                  maxWidth: obj.width,
                  minHeight: obj.height,
                  maxHeight: obj.height,
                }}
                key={index}
              >
                <Image src={obj.src} layout="fill" alt="project" />
                <p className="w-[72px] text-[10px] font-normal font-sans z-0 absolute inset-0 hidden select-none img-caption">
                  Stephen Meise Shooting addidas & Martine Rose July 2021
                </p>
              </div>
            );
          });
        })}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { ImagesArr: HomeLayout },
  };
}
