import React from "react";
const MobileProgramming_01: React.FC<
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
        d="M5 8V2H19l-.002 6M5 16l-.001 6H19l-.003-6M10.5 19h3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m16.499 9.5 2.5 2.5-2.5 2.5M7.499 9.5l-2.5 2.5 2.5 2.5M13 9l-2 6"
      />
    </svg>
  );
};
export default MobileProgramming_01;
