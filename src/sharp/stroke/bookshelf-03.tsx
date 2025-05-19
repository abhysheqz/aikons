import React from "react";
const Bookshelf_03: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 15.99h18M3 8.994h18"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 18.989h3M10 8.994 9 4.996M6 8.994V4.996m7 3.998V4.996M11 15.99v-3.997m3 3.998 1-3.998m3 3.998v-3.998"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3 2.1a.1.1 0 0 1 .1-.099h17.8a.1.1 0 0 1 .1.1v19.898H3z"
      />
    </svg>
  );
};
export default Bookshelf_03;
