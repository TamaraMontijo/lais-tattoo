import Image from "next/image";

export function Header() {
  return (
    <header className="bg-white p-5 flex font-sans w-full h-32 px-20">
      <nav className="container mx-auto max flex flex-row justify-between items-center">
        <div className="logo hover:scale-110 cursor-pointer">
          <Image
            src="../../logo.svg"
            alt="Logo Lais Tattoo"
            width={100}
            height={100}
          />
        </div>
        <div className="links flex flex-row gap-10 font-montserrat font-light">
          <a
            href="http://google.com.br"
            target="_blank"
            className="text-slate-300 hover:scale-105 hover:font-normal tracking-wider"
            rel="noopener noreferrer"
          >
            INÍCIO
          </a>
          <a
            href="http://google.com.br"
            target="_blank"
            className="text-slate-300 hover:scale-105 hover:font-normal tracking-wider"
            rel="noopener noreferrer"
          >
            SOBRE
          </a>
          <a
            href="http://google.com.br"
            target="_blank"
            className="text-slate-300 hover:scale-105 hover:font-normal tracking-wider"
            rel="noopener noreferrer"
          >
            DETALHES
          </a>
          <a
            href="http://google.com.br"
            target="_blank"
            className="text-slate-300 hover:scale-105 hover:font-normal tracking-wider"
            rel="noopener noreferrer"
          >
            FOTOS
          </a>
        </div>
        <div className="social">
          <a href="https://www.instagram.com/laiss.tattoo/" target="_blank">
            <Image
              className="hover:scale-110 cursor-pointer"
              src="../../insta.svg"
              alt="logo insta"
              width={25}
              height={100}
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
