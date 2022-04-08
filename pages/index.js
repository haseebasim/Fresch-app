import React, { useState, useEffect } from "react";
import HomeLayout from "../layout/homepageLayout";
import Image from "next/image";
import Nav from "../components/Nav";
import { useRouter } from "next/router";

export default function Home({ ImagesArr }) {
  const router = useRouter();
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
                <Image
                  src={obj.src}
                  layout="fill"
                  alt="project"
                  onClick={() => {
                    router.push({
                      pathname: `/full-screen/${obj.project}`,
                      query: {
                        project: obj.project,
                        caption: obj.caption,
                      },
                    });
                  }}
                />
                <p className="w-max text-[7px] whitespace-pre-wrap font-normal font-sans z-0 absolute top-2.5 left-2.5 hidden select-none img-caption">
                  {obj.caption}
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
