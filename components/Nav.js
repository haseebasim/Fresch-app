import { useRouter } from "next/router";
import Link from "next/link";

export default function Nav() {
  const router = useRouter();
  return (
    <div className="absolute top-2 z-50 pr-[13px] pl-[22px] flex justify-between w-full h-max">
      <span
        className={`text-[10px] font-black cursor-pointer ${
          router.pathname === "/" ? "invisible" : "visible"
        }`}
        onClick={() => router.push("/")}
      >
        ART DIRECTION AND STYLING
      </span>
      <div className="text-[10px] font-black flex gap-x-[11px]">
        <div
          className={`${
            router.pathname === "/index-page" ? "text-[#4A90E2]" : "black"
          }`}
        >
          <Link href={"/index-page"}>INDEX</Link>
        </div>
        <div
          className={`${
            router.pathname === "/contact" ? "text-[#4A90E2]" : "black"
          }`}
        >
          <Link href={"/contact"}>CONTACT</Link>
        </div>
      </div>
    </div>
  );
}
