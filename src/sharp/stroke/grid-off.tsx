import React from "react";
const GridOff: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M7 21V7.5M3 17h13.5M3 3l18 18M17 3v10m0 8v-3.5M21 7H11M3 7h3.5"
      />
    </svg>
  );
};
export default GridOff;
