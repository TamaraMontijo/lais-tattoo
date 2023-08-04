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
      <div className="bg-palette-50 flex absolute top-1/2 right-1/2 translate-x-1/2 translate-y-[-50%] w-[55vw] h-[58vh]">
        <div className="content flex">
          <div className="text">
            <p className="uppercase font-barlow">favorite blogspot</p>
            <p className="lowercase font-montserrat">simplify your wardrobe</p>
            <p className="font-montserrat">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean 
              commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer 
              adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor 
              sit amet, consectetuer adipiscing elit. 
            </p>
          </div>
          <div className="image">
            <Image
              src="/processo-criativo.jpg"
              className="object-fit"
              alt="Imagem tatuagem de flor"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Section2 };
