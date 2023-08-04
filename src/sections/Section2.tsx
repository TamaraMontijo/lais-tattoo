import Image from "next/image";

import { Crimson_Text as Crimson } from "next/font/google";

const crimson = Crimson({
  weight: ["600"],
  subsets: ["latin"],
  variable: "--font-crimson-pro",
});

function Section2() {
  return (
    <div className="bg-palette-100 w-screen h-[120vh] relative ">
      <div className="bg-palette-50 flex absolute top-1/2 right-1/2 translate-x-1/2 translate-y-[-50%] w-[40vw] h-[85vh]">
        <div className="content flex">
          <div className="text w-[366px] translate-x-[-25%] translate-y-[20%] h-auto">
            <p className="uppercase font-barlow font-semibold leading-loose tracking-wider mb-6">favorite blogspot</p>
            <p className="lowercase font-montserrat font-thin text-6xl w-[23vw] mb-6">simplify your wardrobe</p>
            <p className="font-montserrat font-light leading-[1.8] tracking-widest text-base text-justify">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean 
              commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer 
              adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor 
              sit amet, consectetuer adipiscing elit. 
            </p>
          </div>
          <div className="image translate-x-[25%] translate-y-[20%] w-[400px]">
            <Image
              src="/processo-criativo.jpg"
              className="object-fit"
              alt="Imagem tatuagem de flor"
              width={800}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Section2 };
