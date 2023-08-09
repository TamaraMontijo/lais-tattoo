import Image from "next/image";

import { Crimson_Text as Crimson } from "next/font/google";
import { Button } from "@/components/Button";

const crimson = Crimson({
  weight: ["600"],
  subsets: ["latin"],
  variable: "--font-crimson-pro",
});

function AboutMe() {
  return (
    <div className="flex flex-row h-screen w-full">
      <div className="h-full bg-gray-900 w-1/2 relative">
        <div className="image absolute inset-0">
          <Image
            src="/sobre.png"
            className="object-fit"
            alt="Imagem tatuagem de flor"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="h-full w-1/2 bg-[#817d7d]">
        <div className="relative">
          <h1 className="font-crimson font-semibold text-5xl text-white absolute -left-1/4 top-48">
            Cada traço que desenho conta <br />
            uma história única sobre você.
          </h1>

          <div className="w-full absolute top-80 flex flex-col justify-center ml-28">
            <div className="text-[#333333] w-1/2 justify-center items-center text-justify">
              <div className="border-solid border-l border-[#333333] pt-12 pl-8 relative">
                <span className="w-3 h-3 bg-[#333333] rounded-full block absolute -top-1 -left-1.5"></span>

                <div className="flex items-center justify-center mb-8">
                  <Image
                    src="../../logo.svg"
                    className="text-center"
                    alt="Logo Lais Tattoo"
                    width={100}
                    height={100}
                  />
                </div>

                <h3 className="font-montserrat text-base tracking-widest text-center font-light mt-4 pb-10 text-white">
                  Sou movida pela paixão de tatuar histórias, eternizar memórias
                  e
                  <br /> registrar emoções. <br />
                  Cada traço que faço é como uma pincelada de personalidade que
                  fica pra sempre.
                </h3>
              </div>

              <div>
                <span className="mt-3 block">
                  <Button
                    text="SOBRE MIM"
                    href="https://www.instagram.com/laiss.tattoo/"
                    target="_blank"
                  ></Button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AboutMe };
