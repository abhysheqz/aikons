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
        strokeWidth={1.5}
        d="M4 5v14M14 5v14M16.5 18h2m2 0h-2m0 0v-8H18l-1.5 1.5M4 12h10"
      />
    </svg>
  );
};
export default Heading_01;
