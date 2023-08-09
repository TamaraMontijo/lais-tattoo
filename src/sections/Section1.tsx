import Image from "next/image";

import { Crimson_Text as Crimson } from "next/font/google";
import { Button } from "@/components/Button";

const crimson = Crimson({
  weight: ["600"],
  subsets: ["latin"],
  variable: "--font-crimson-pro",
});

function Section1() {
  return (
    <div className="bg-palette-50 w-screen h-[150vh] relative ">
      <div className="bg-palette-100 flex flex-col absolute top-1/2 right-1/2 translate-x-1/2 translate-y-[-50%] w-[30vw] h-[85vh]">
        <div className="content flex mb-10 items-end">
          <div className="image  w-[400px] mr-20">
            <Image
              src="/studio2.jpg"
              className="object-fit w-96"
              alt="foto do estúdio"
              width={800}
              height={500}
            />
          </div>
          <div className="text">
            <p className="lowercase font-montserrat font-thin text-6xl mb-6 tracking-[0.03em]">photos</p>
            <p className="font-montserrat font-light leading-[1.8] tracking-widest text-base text-justify mb-6">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.  
            </p>
            
            <Button
              text="SOBRE mim"
              href="https://www.instagram.com/laiss.tattoo/"
              target="_blank"
            ></Button>
      
          </div>
        </div>
        <div className="content flex mb-10 items-end">
          <div className="text mr-20">
            <p className="lowercase font-montserrat font-thin text-6xl mb-6 tracking-[0.03em]">details</p>
            <p className="font-montserrat font-light leading-[1.8] tracking-widest text-base text-justify mb-6">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.  
            </p>
            
            <Button
              text="view portifolio"
              href="https://www.instagram.com/laiss.tattoo/"
              target="_blank"
            ></Button>
      
          </div>
          <div className="image  w-[400px]">
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

export { Section1 };
