import Image from "next/image";
import { Map } from "@/components/Map";

import { Crimson_Text as Crimson } from "next/font/google";
import { Header } from "@/components/Header";

const crimson = Crimson({
  weight: ["600"],
  subsets: ["latin"],
  variable: "--font-crimson-pro",
});

function MyWork() {
  return (
    <div>
      {/* LARGE SCREEN */}
    <div className="bg-palette-50 w-screen md:h-[120vh] h-[200vh] relative max-lg:flex max-lg:items-center max-lg:justify-center">
      <div className="bg-[#817d7d] flex md:max-lg:w-[70%] md:max-lg:h-[60%] lg:absolute lg:top-1/2 lg:right-1/2 lg:translate-x-1/2 lg:translate-y-[-50%] lg:w-[30vw] lg:h-[85vh]">
        <div className="md:flex md:max-lg:items-center md:max-lg:justify-center md:max-lg:w-full">
          <div className="image md:w-[400px]">
            <Image
              src="/processo-criativo.jpg"
              className="object-fit max-md:w-[250px] max-md:translate-x-[-20%] max-md:translate-y-[-50%] md:translate-x-[-30%] lg:translate-y-[20%]"
              alt="Imagem tatuagem de flor"
              width={800}
              height={500}
            />
          </div>
          <div className="text w-[330px] max-md:translate-y-[-15%] lg:translate-y-[10%] h-auto">
            <p className="uppercase font-barlow font-semibold leading-loose tracking-wider mb-4 max-md:ms-6 max-md:me-6">
              processo criativo
            </p>
            <p className="lowercase font-montserrat font-thin text-6xl w-[23vw] mb-6 tracking-[0.03em] max-md:ms-6 max-md:me-6">
              o meu trabalho
            </p>
            <p className="font-montserrat font-light leading-[1.8] tracking-widest text-base text-justify  md:max-lg:w-[390px] max-md:m-6">
            Ao longo dos últimos cinco anos, tenho tido a honra de transformar histórias em arte por meio da tatuagem. Meus traços finos e delicados ganham vida na pele dos meus clientes, representando momentos preciosos. Localizado em Águas Claras, meu estúdio é um espaço dedicado à qualidade, onde priorizamos os melhores materiais e técnicas para alcançar resultados de excelência em cada obra que criamos juntos.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* MEDIUM AND SMALL SCREEN */}
    {/* <div className="bg-palette-50 w-screen relative lg:hidden">
    <div className="bg-[#817d7d] ">
        <div className="content flex">
          <div className="image">
            <Image
              src="/processo-criativo.jpg"
              className="object-fit translate-x-[-30%] translate-y-[20%]"
              alt="Imagem tatuagem de flor"
              width={800}
              height={500}
            />
          </div>
          <div className="">
            <p className="uppercase font-barlow font-semibold leading-loose tracking-wider mb-4">
              processo criativo
            </p>
            <p className="lowercase font-montserrat font-thin text-6xl w-[23vw] mb-6 tracking-[0.03em]">
              o meu trabalho
            </p>
            <p className="font-montserrat font-light leading-[1.8] tracking-widest text-base text-justify">
            Ao longo dos últimos cinco anos, tenho tido a honra de transformar histórias em arte por meio da tatuagem. Meus traços finos e delicados ganham vida na pele dos meus clientes, representando momentos preciosos. Localizado em Águas Claras, meu estúdio é um espaço dedicado à qualidade, onde priorizamos os melhores materiais e técnicas para alcançar resultados de excelência em cada obra que criamos juntos.
            </p>
          </div>
        </div>
      </div>

    </div> */}
    </div>
    
    
  );
}

export { MyWork };
