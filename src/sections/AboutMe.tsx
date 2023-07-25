import Image from "next/image";

import { Crimson_Text as Crimson } from "next/font/google";

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
        <div>
          <h1 className="font-sans">Cada traço que desenho conta uma história única sobre você.</h1>
          <h1>Cada traço que desenho conta uma história única sobre você.</h1>
          <h1>Cada traço que desenho conta uma história única sobre você.</h1>
        </div>
      </div>
    </div>
  );
}

export { AboutMe };
