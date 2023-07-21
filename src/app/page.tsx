import { Button } from "@/components/Button";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Header></Header>

      <Button
        text="saiba mais"
        href="https://www.instagram.com/laiss.tattoo/"
        target="_blank"
      ></Button>
    </main>
  );
}
