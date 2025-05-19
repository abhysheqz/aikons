import React from "react";
const Quran_03: React.FC<
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
        d="M21 17H6.5a2.5 2.5 0 0 0 0 5H21"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M21 22a2.5 2.5 0 0 1 0-5M15.434 11A3.23 3.23 0 1 1 11 6.566"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 8h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 19.5v-14A3.5 3.5 0 0 1 7.5 2h10A3.5 3.5 0 0 1 21 5.5V17"
      />
    </svg>
  );
};
export default Quran_03;
