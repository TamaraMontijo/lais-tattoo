import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AboutMe } from "@/sections/AboutMe";
import { Studio } from "@/sections/Studio";
import { MyWork } from "@/sections/MyWork";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-screen">
      <Header></Header>
      <div className="fixed z-40 top-1/2 right-[-82px] transform -translate-y-1/2 rotate-[270deg]">
        <Button
          text="Fale comigo"
          href="https://api.whatsapp.com/send?phone=556199880877&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento."
          target="_blank"
        ></Button>
      </div>
      <AboutMe></AboutMe>
      <MyWork></MyWork>
      <Studio></Studio>
      <Footer></Footer>
    </main>
  );
}
