import Image from "next/image";
import github from "./../../public/github.svg";
import linkedin from "./../../public/linkedin.svg";
import twitter from "./../../public/twitter.svg";
// import foto from "./../../public/fototwo.png";
import foto from "./../../public/me2.png";

import circulos from "./../../public/circulos.svg";
import oval from "./../../public/oval.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid  grid-cols-1 place-content-center md:grid-cols-layout2 lg:grid-cols-layout md:grid-rows-60 lg:gap-x-[30px] md:gap-x-[4px] lg:gap-y-[12px]">
      <div className="font-bold text-2xl text-white text-center mt-5 md:col-start-1 md:col-span-1 md:mt-[43px] md:ml-[30px]">
        Aurindo
      </div>
      <div className="absolute top-32">
        <Image src={circulos} alt={"circulos"} className="z-0"></Image>
      </div>
      <div className="absolute top-[254px] right-0 z-50">
        <Image src={oval} alt={"circulos"} className=""></Image>
      </div>
      <div className="absolute flex justify-center items-center w-full left-4 md:grid md:grid-cols-layout md:gap-x-[30px]">
        <Image
          src={foto}
          alt={"foto"}
          className="w-auto h-[383px] bg-opacity-90 md:col-start-8 col-span-5 md:col-span-6 md:h-[500px] lg:h-[600pxvai]"
        ></Image>
      </div>
      <div className="grid place-content-center grid-flow-col gap-[25.6px] py-[20.8px] z-50 md:col-start-10 md:col-span-3 md:mt-[43px]">
        <Link
          href={"https://github.com/aurindo10"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={github} alt={"git hub logo"}></Image>
        </Link>
        <Link
          href={"https://www.linkedin.com/in/aurindoneto/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={linkedin} alt={"linkedin hub logo"}></Image>
        </Link>
        <Link
          href={"https://twitter.com/aurindo15"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={twitter} alt={"twitter hub logo"}></Image>
        </Link>
      </div>
      <div className="w-full md:ml-[30px] text-center  font-bold mt-[310px] text-3xl md:col-start-1 md:col-span-9 md:text-6xl md:row-start-3 lg:row-start-4 md:text-start md:row-span-2 md:mt-[0px]">
        Prazer em conhecer você! Me chamo{" "}
        <span className="underline decoration-4 underline-offset-4 decoration-emerald-500">
          Aurindo
        </span>
        .
      </div>
      <div className="w-full md:ml-[30px] text-center font-bold mt-5 text-base md:col-start-1 lg:col-span-5 md:col-span-7 md:row-start-7 lg:row-start-6 md:text-start md:mt-0">
        Moro no Brasil, Sou um desenvolver full-stack apaixonado em criar
        soluções rápidas e inovadoras para o seu negócio.
      </div>
      <div className="font-bold md:ml-[30px] mt-[24px] text-lg font-sans text-center underline-offset-8 underline decoration-emerald-500 decoration-4 lg:row-start-[8] md:row-start-[9] lg:col-span-3 md:col-span-4 md:col-start-1 md:mt-0 md:text-start">
        ENTRE EM CONTATO
      </div>
      <div className="px-4 md:col-span-full md:row-start-[12]">
        <div className="h-[1px] bg-white mt-[80px] md:mt-0 w-full"></div>
      </div>
    </div>
  );
}
