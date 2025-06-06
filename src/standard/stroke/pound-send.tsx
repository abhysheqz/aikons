import React from "react";
const PoundSend: React.FC<
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
        d="m19 15.5 2.5-2.5-2.5-2.5M15 13h5.891M8.5 13A4.5 4.5 0 1 1 13 8.5M8.5 13h2m-2 0h-1m7 6-.492.328a4 4 0 0 1-2.22.672H3c3-2 4.5-5.5 4.5-7m-5 0h5"
      />
    </svg>
  );
};
export default PoundSend;
