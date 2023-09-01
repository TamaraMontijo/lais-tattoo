import Image from "next/image";

import { Crimson_Text as Crimson } from "next/font/google";
import { Button } from "@/components/Button";
import { Map } from "@/components/Map";

const crimson = Crimson({
  weight: ["600"],
  subsets: ["latin"],
  variable: "--font-crimson-pro",
});

function Studio() {
  return (
    <div className="bg-[#817d7d] w-screen py-24 relative">
      {/* left column */}
      <div className="w-1/3 left-40 top-1/4 relative">
        <h1 className="text-palette-300 tracking-widest font-crimson font-bold whitespace-nowrap text-6xl w-[23vw] mb-10 tracking-[0.03em]">
          O estúdio
        </h1>
        {/* circle and line decoration */}
        <span className="w-3 h-3 bg-[#333333] rounded-full block absolute top-[4.75rem] left-[3.7rem]"></span>
        <span className="w-0.5 h-[54rem] bg-[#333333] rounded-full block absolute top-[4.75rem] left-[4rem]"></span>
        {/* end of circle and line decoration */}
        <p className="text-white tracking-wider font-thin w-3/4 text-justify ml-auto mt-[7.5rem] h-[700px]">
          O meu estúdio de tatuagem fica em Águas Claras. É um espaço onde a
          simplicidade encontra a criatividade. Localizado em um ambiente
          tranquilo e convidativo, cada elemento, desde a decoração até a
          disposição da sala, foi projetado para proporcionar uma experiência
          agradável e estética.{" "}
        </p>
        {/* Map */}
        <div className="mt-32 bg-palette-300 flex items-center justify-center p-16">
          <Map></Map>
        </div>
      </div>
      {/* image */}
      <div className="flex flex-col absolute top-1/4 left-[50%] translate-y-[-50%] w-[30vw] h-[85vh]">
        <Image
          src="/studio2.jpg"
          className="object-fit translate-y-[20%]"
          alt="Foto do estúdio"
          width={800}
          height={500}
        />
        <p className="mt-[400px] text-white font-montserrat text-base tracking-widest">Edifício Executive Office Tower</p>
        <p className="text-white tracking-widest font-light">SHN Q. 2 bloco F Sala 1111</p>
        <p className="text-white tracking-widest font-light"> Asa Norte, Brasília - DF, 70702-906</p>
      </div>
    </div>
  );
}

export { Studio };
