import React from "react";
const Quran_02: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M21.5 17H7a2.5 2.5 0 0 0 0 5h14.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M21.5 22a2.5 2.5 0 0 1 0-5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.172 6.672 13 5.5l-1.172 1.172h-1.656v1.656L9 9.5l1.172 1.172v1.656h1.656L13 13.5l1.172-1.172h1.656v-1.656L17 9.5l-1.172-1.172V6.672z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.5 19.5v-14A3.5 3.5 0 0 1 8 2h10a3.5 3.5 0 0 1 3.5 3.5V17"
      />
    </svg>
  );
};
export default Quran_02;
