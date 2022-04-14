/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import Image from "next/image";
import fileNamesData from "../../layout/projects.json";
import { Container } from "postcss";

const FullScreenPage = ({ project, caption, fileNames }) => {
  const [counter, setCounter] = useState(0);
  const handleClick = (direction) => {
    switch (direction) {
      case "right":
        fileNames[counter + 1] === undefined
          ? setCounter(0)
          : setCounter(counter + 1);
        break;
      case "left":
        fileNames[counter - 1] === undefined
          ? setCounter(fileNames.length - 1)
          : setCounter(counter - 1);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Nav />
      <div className="relative justify-center items-center w-full h-full flex pt-6 pl-[22px]">
        <div
          className="w-3/6 z-10 h-full prev"
          onClick={() => handleClick("left")}
        >
          <p className="w-max whitespace-pre-wrap font-normal font-sans text-[10px] leading-[10px]">
            {caption}
          </p>
        </div>
        <div
          className="w-3/6 z-10 h-full next"
          onClick={() => handleClick("right")}
        ></div>
        <div className="absolute flex z-0 justify-center items-center w-4/5 object-contain max-h-[62.5%] ">
          <div className="relative w-full max-w-[400px] max-h-[500px]">
            <Image
              src={`/images/projects/${project}/${fileNames[counter]}`}
              alt="project_images"
              width={400}
              height={500}
              objectFit={'contain'}
              // layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const paths = Object.keys(fileNamesData).map((key) => {
    return {
      params: {
        project: key,
      },
    };
  });
  return {
    paths,
    fallback: false, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const projectName = context.params.project;
  const caption = fileNamesData[projectName].caption;
  const fileNames = fileNamesData[projectName].files;
  return {
    props: { project: projectName, fileNames, caption },
  };
}

export default FullScreenPage;
