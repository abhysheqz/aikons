import React from "react";
const NewOffice: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5.9 12.451a1.03 1.03 0 0 1 .6-.201c.271 0 .473.112.6.201l.956.86 1.276-.035c.154.014.378.06.584.232s.288.386.328.534l.19 1.295 1.01.814c.106.108.245.286.291.546a1.03 1.03 0 0 1-.088.614l-.676 1.119.259 1.286c.012.152.006.38-.127.61s-.326.35-.464.415l-1.216.412-.612 1.145c-.089.127-.24.3-.494.394a1.03 1.03 0 0 1-.631.016L6.5 22.234l-1.186.474a1.03 1.03 0 0 1-.631-.016 1.03 1.03 0 0 1-.494-.394l-.612-1.145-1.216-.412a1.03 1.03 0 0 1-.464-.415 1.03 1.03 0 0 1-.127-.61l.259-1.286-.676-1.12a1.03 1.03 0 0 1-.088-.613 1.03 1.03 0 0 1 .292-.546l1.009-.814.19-1.295a1.03 1.03 0 0 1 .328-.534 1.03 1.03 0 0 1 .583-.232l1.277.035z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.5 6a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2h-1a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1m-4 3a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2h-1a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.438 1.366c-.864-.116-1.955-.116-3.278-.116h-.138c-1.323 0-2.415 0-3.278.116-.907.122-1.708.388-2.349 1.029s-.907 1.442-1.029 2.349c-.116.863-.116 1.955-.116 3.278v3a.977.977 0 1 0 1.955 0V8.092c0-1.41.002-2.369.098-3.087.093-.69.257-1.01.474-1.227.218-.217.537-.381 1.227-.474.718-.096 1.677-.098 3.087-.098s2.369.002 3.087.098c.69.093 1.01.257 1.227.474.217.218.38.537.474 1.227.096.718.098 1.677.098 3.087v13.682c0 .54.438.977.977.977h3.974c.866 0 1.613 0 2.21-.08.641-.086 1.255-.28 1.753-.779.498-.498.693-1.112.779-1.752.08-.598.08-1.345.08-2.211v-5.992c0-.867 0-1.613-.08-2.21-.086-.642-.28-1.256-.779-1.754-.498-.498-1.112-.692-1.752-.778-.598-.08-1.345-.08-2.211-.08H14.93c-.005-.924-.026-1.713-.114-2.37-.122-.907-.388-1.708-1.03-2.349-.64-.641-1.441-.907-2.348-1.029M17.5 10.25a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NewOffice;
