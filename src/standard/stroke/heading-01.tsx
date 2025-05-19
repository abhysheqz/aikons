import React from "react";
const Heading_01: React.FC<
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
        d="M17 19h1.5m1.5 0h-1.5m0 0v-8H18l-1 1M4 12h9m-9 7V5m9 14V5"
      />
    </svg>
  );
};
export default Heading_01;
