import React from "react";
const Heading_03: React.FC<
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
        d="M16 12.778c0-1.139.959-1.778 2-1.778a2 2 0 0 1 2 2c0 1.5-1.5 2-1.5 2s1.5.5 1.5 2a2 2 0 0 1-2 2c-1.041 0-2-.64-2-1.778M4 12h9m-9 7V5m9 14V5"
      />
    </svg>
  );
};
export default Heading_03;
