import { useRouter } from "next/router";
import Link from "next/link";

export default function Nav() {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div className="absolute top-2 z-50 pr-[13px] pl-[22px] flex justify-between w-full h-max">
      <span
        className={`text-[7px] font-black ${
          router.pathname === "/" ? "invisible" : "visible"
        }`}
      >
        ART DIRECTION AND STYLING
      </span>
      <div className="text-[7px] font-black flex gap-x-[11px]">
        <div
          className={`${
            router.pathname === "/index" ? "text-[#4A90E2]" : "black"
          }`}
        >
          <Link href={"/index"}>INDEX</Link>
        </div>
        <div
          className={`${
            router.pathname === "/contact" ? "text-[#4A90E2]" : "black"
          }`}
        >
          <Link href={"#"}>CONTACT</Link>
        </div>
      </div>
    </div>
  );
}
