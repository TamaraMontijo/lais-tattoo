import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { AboutMe } from "@/sections/AboutMe";
import { Section1 } from "@/sections/Section1";
import { Section2 } from "@/sections/Section2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-screen">
      <Header></Header>
      <AboutMe></AboutMe>
      <Section1></Section1>
      <Section2></Section2>

      {/* <div className="button absolute bottom-0">
        <Button
          text="saiba mais"
          href="https://www.instagram.com/laiss.tattoo/"
          target="_blank"
        ></Button>
      </div> */}
    </main>
  );
}
