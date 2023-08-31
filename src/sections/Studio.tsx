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
    <div className="bg-palette-100 w-screen h-[150vh] relative ">
      {/* O meu estúdio de tatuagem fica em Águas Claras. É um espaço onde a
      simplicidade encontra a criatividade. Localizado em um ambiente tranquilo
      e convidativo, cada elemento, desde a decoração até a disposição da sala,
      foi projetado para proporcionar uma experiência agradável e estética. */}
      <div className="bg-palette-50 flex flex-col absolute top-1/2 right-1/3 translate-x-1/2 translate-y-[-50%] w-[30vw] h-[85vh]">
        <Map></Map>
      </div>
    </div>
  );
}

export { Studio };
