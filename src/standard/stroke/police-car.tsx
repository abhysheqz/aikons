import React from "react";
const PoliceCar: React.FC<
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
        d="m2.5 13.5 2 .5M21.5 13.5l-2 .5M3 9.5l1.5 1M21 9.5l-1.5 1M2 17v3.882c0 .379.215.726.575.842A5.5 5.5 0 0 0 4.25 22a5.5 5.5 0 0 0 1.675-.276c.36-.116.575-.463.575-.842V19M17.5 19v1.882c0 .379.215.726.575.842A5.5 5.5 0 0 0 19.75 22a5.5 5.5 0 0 0 1.675-.276c.36-.116.575-.463.575-.842V17"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 17.5v-2.914a3 3 0 0 1 .695-1.92L4.5 10.5h15l1.805 2.165a3 3 0 0 1 .695 1.92V17.5S18.998 19 17.5 19h-11C5.002 19 2 17.5 2 17.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8 19 .772-2.316A1 1 0 0 1 9.721 16h4.558a1 1 0 0 1 .949.684L16 19M4.5 10.5l1.521-4.183A2 2 0 0 1 7.901 5h8.198a2 2 0 0 1 1.88 1.317L19.5 10.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 3.8c0-.994.537-1.8 1.2-1.8h1.6c.663 0 1.2.806 1.2 1.8 0 .663-.358 1.2-.8 1.2h-2.4c-.442 0-.8-.537-.8-1.2Z"
      />
    </svg>
  );
};
export default PoliceCar;
