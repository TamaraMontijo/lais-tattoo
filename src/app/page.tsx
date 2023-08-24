import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { AboutMe } from "@/sections/AboutMe";
import { Section1 } from "@/sections/Section1";
import { Section2 } from "@/sections/Section2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-screen">
      <Header></Header>
      <div className="absolute bottom-0 fixed z-50">
        <Button
          text="Fale comigo"
          href="https://api.whatsapp.com/send?phone=556199880877&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento."
          target="_blank"
        ></Button>
      </div>
      <AboutMe></AboutMe>
      <Section1></Section1>
      <Section2></Section2>

      
    </main>
  );
}
