import React from "react";
const Car_01: React.FC<
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
        d="m2.5 12 2 1M21.5 12l-2 1M3 8l1.5 1M21 8l-1.5 1M2 16v3.882c0 .379.215.726.575.842A5.5 5.5 0 0 0 4.25 21a5.5 5.5 0 0 0 1.675-.276c.36-.116.575-.463.575-.842V18M17.5 18v1.882c0 .379.215.726.575.842A5.5 5.5 0 0 0 19.75 21a5.5 5.5 0 0 0 1.675-.276c.36-.116.575-.463.575-.842V16"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 16.5v-3.414a3 3 0 0 1 .695-1.92L4.5 9h15l1.805 2.165a3 3 0 0 1 .695 1.92V16.5S18.998 18 17.5 18h-11C5.002 18 2 16.5 2 16.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8 18 .772-2.316A1 1 0 0 1 9.721 15h4.558a1 1 0 0 1 .949.684L16 18M4.5 9l1.544-4.632A2 2 0 0 1 7.942 3h8.116a2 2 0 0 1 1.898 1.368L19.5 9"
      />
    </svg>
  );
};
export default Car_01;
