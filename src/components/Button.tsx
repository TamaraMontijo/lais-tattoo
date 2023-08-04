interface buttonProps {
  text: string,
  href: string,
  target?: string
}

export function Button(props: buttonProps) {
  return (
    <a href={props.href} target={props.target}>
      <button className="bg-palette-400 hover:bg-palette-300 text-white font-barlow uppercase tracking-wider py-6 px-16">
        {props.text}
      </button>
    </a>
  );
}