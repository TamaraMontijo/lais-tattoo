import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { AboutMe } from "@/sections/AboutMe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between h-screen w-screen">
      <Header></Header>
      <AboutMe></AboutMe>

      <div className="button absolute bottom-0">
        <Button
          text="saiba mais"
          href="https://www.instagram.com/laiss.tattoo/"
          target="_blank"
        ></Button>
      </div>
    </main>
  );
}
