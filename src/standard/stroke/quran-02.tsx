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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12.5 6-1.2 1H9.5v1.8l-1 1.2 1 1.2V13h1.8l1.2 1 1.2-1h1.8v-1.8l1-1.2-1-1.2V7h-1.8z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.5 22h-14a2 2 0 0 1-2-2m0 0a2 2 0 0 1 2-2h14V2h-14a2 2 0 0 0-2 2zM20 18s-1 .763-1 2 1 2 1 2"
      />
    </svg>
  );
};
export default Quran_02;
