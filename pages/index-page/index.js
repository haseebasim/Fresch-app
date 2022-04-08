import indexLayout from "../../layout/indexLayout.json";
import Nav from "../../components/Nav";
import { useRouter } from "next/router";
import Image from "next/image";
export default function Index() {
  const router = useRouter();
  const handleClick = (arrElem) => {
    if (arrElem.project === "louis_vuitton") {
      const correctAnswer = "fresch";
      const answer = window.prompt(
        "Please enter the password to view the project."
      );
      if (answer !== null || answer !== "") {
        answer === correctAnswer &&
          router.push({
            pathname: `/full-screen/${arrElem.project}`,
            query: { project: arrElem.project, caption: arrElem.caption },
          });
      }
    } else {
      router.push({
        pathname: `/full-screen/${arrElem.project}`,
        query: { project: arrElem.project, caption: arrElem.caption },
      });
    }
  };
  return (
    <>
      <Nav />
      <div className="my-[76px] mx-auto">
        <div className="flex w-full gap-x-[8.3%]  pr-[58px] pl-[43px]">
          {Object.keys(indexLayout).map((key, index) => {
            return (
              <div
                className="flex w-[16.6%] mx-auto flex-col gap-y-[60px]"
                key={index}
              >
                {indexLayout[key].map((arrElem, index) => {
                  return (
                    <div
                      key={index}
                      className="indexImageContainer w-full cursor-pointer z-10 relative"
                    >
                      <Image
                        loading="eager"
                        quality={100}
                        onClick={() => handleClick(arrElem)}
                        className="w-full"
                        src={arrElem.image}
                        width={"170px"}
                        height={arrElem.height}
                        alt="project"
                      />
                      <p className="w-max whitespace-pre-wrap font-normal font-sans text-[7px] leading-[7px] z-0 absolute top-2.5 left-2.5 hidden select-none img-caption">
                        {arrElem.caption}
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
