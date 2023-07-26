import Image from "next/image";
import github from "./../../public/github.svg";
import linkedin from "./../../public/linkedin.svg";
import twitter from "./../../public/twitter.svg";
import foto from "./../../public/me.png";
import circulos from "./../../public/circulos.svg";
import oval from "./../../public/oval.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid place-content-center ">
      <div className="font-bold text-2xl text-white text-center mt-5">
        Aurindo
      </div>
      <div className="absolute top-32">
        <Image src={circulos} alt={"circulos"} className="z-0"></Image>
      </div>
      <div className="absolute top-[254px] right-0">
        <Image src={oval} alt={"circulos"} className="z-0"></Image>
      </div>
      <div className="absolute flex justify-center items-center w-full max-w-[375px] left-4">
        <Image src={foto} alt={"foto"} className="w-auto h-[383px]"></Image>
      </div>
      <div className="social icons grid place-content-center grid-flow-col gap-[25.6px] py-[20.8px] z-50">
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
      <div className="w-[343px] text-center  font-bold mt-[310px] text-3xl">
        Prazer em conhecer você! Me chamo{" "}
        <p className="underline decoration-4 underline-offset-4 decoration-emerald-500">
          Aurindo.
        </p>
      </div>
      <div className="w-[343px] text-center font-bold mt-5 text-base">
        Moro no Brasil, Sou um desenvolver full-stack apaixonado em criar
        soluções rápidas e inovadoras para o seu negócio.
      </div>
      <div className="font-bold mt-[24px] text-lg font-sans text-center underline-offset-8 underline decoration-emerald-500 decoration-4">
        ENTRE EM CONTATO
      </div>
    </main>
  );
}
