import React from "react";
const MobileProgramming_02: React.FC<
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
        d="M5.001 7V2H19l-.002 5M5.002 17 5 22h14.001l-.003-5M10.5 19h3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m17 9 3 3-3 3M7 9l-3 3 3 3"
      />
    </svg>
  );
};
export default MobileProgramming_02;
