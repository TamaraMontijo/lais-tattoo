interface buttonProps {
  text: string,
  href: string,
  target?: string
}

export function Button(props: buttonProps) {
  return (
    <a href={props.href} target={props.target}>
      <button className="bg-palette-300 hover:bg-palette-400 text-white font-barlow uppercase tracking-wider px-16 h-[45px] whitespace-nowrap">
        {props.text}
      </button>
    </a>
  );
}