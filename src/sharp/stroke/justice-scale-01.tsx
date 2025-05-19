import React from "react";
const JusticeScale_01: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 5v17m0 0H9m3 0h3M21 13l-2.5-5-2.5 5M8 13 5.5 8 3 13"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 8h2.048c1.264 0 2.49-.529 3.476-1.5 2.032-2 4.92-2 6.952 0 .986.971 2.212 1.5 3.476 1.5H21"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5.5 16.5A3.5 3.5 0 0 0 9 13H2a3.5 3.5 0 0 0 3.5 3.5ZM18.5 16.5A3.5 3.5 0 0 0 22 13h-7a3.5 3.5 0 0 0 3.5 3.5Z"
      />
    </svg>
  );
};
export default JusticeScale_01;
