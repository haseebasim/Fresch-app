/* eslint-disable @next/next/no-img-element */
import { data } from "autoprefixer";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav";
import fileNamesData from "../../layout/projects.json";

const FullScreenPage = ({ project, caption, fileNames }) => {
  console.log(project, fileNames, caption);
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
          <p className="w-max whitespace-pre-wrap font-normal font-sans text-[7px] leading-[7px]">
            {caption}
          </p>
        </div>
        <div
          className="w-3/6 z-10 h-full next"
          onClick={() => handleClick("right")}
        ></div>
        <div className="absolute flex z-0 justify-center items-center w-4/5 object-contain max-h-[62.5%] ">
          <img
            className="max-w-[400px] max-h-[500px]"
            src={`/images/projects/${project}/${fileNames[counter]}`}
            alt="project_images"
            layout="fill"
          />
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const projectName = context.query.project;
  const caption = context.query.caption;
  const fileNames = fileNamesData[projectName];
  return {
    props: { project: projectName, fileNames, caption },
  };
}

export default FullScreenPage;
