import indexLayout from "../../layout/indexLayout.json";
import Image from "next/image";
import Nav from "../../components/Nav";

export default function Index() {
  return (
    <>
      <Nav />
      <div className="mt-[76px] mx-auto">
        <div className="flex w-full gap-x-[8.3%]  pr-[58px] pl-[43px]">
          {Object.keys(indexLayout).map((key, index) => {
            return (
              <div className="flex w-[16.6%] mx-auto flex-col gap-y-[60px]" key={index}>
                {indexLayout[key].map((arrElem, index) => {
                  return (
                    <div
                      key={index}
                      className="indexImageContainer w-full cursor-pointer z-10 relative"
                    >
                      <Image
                        className="w-full"
                        src={arrElem.image}
                        width={"170"}
                        height={arrElem.height}
                        layout="responsive"
                        alt="project"
                      />
                      <p className="w-[72px] text-[10px] z-0 absolute inset-0 hidden select-none img-caption">
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
