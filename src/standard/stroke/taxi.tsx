import React from "react";
const Taxi: React.FC<
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
        d="m8 19 .772-2.316A1 1 0 0 1 9.721 16h4.558a1 1 0 0 1 .949.684L16 19M4.5 10.5l1.544-4.632A2 2 0 0 1 7.942 4.5h8.116a2 2 0 0 1 1.898 1.368L19.5 10.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8.5 4.5.34-1.696A1 1 0 0 1 9.82 2h4.36a1 1 0 0 1 .98.804L15.5 4.5"
      />
    </svg>
  );
};
export default Taxi;
