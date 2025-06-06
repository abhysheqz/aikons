import React from "react";
const ArrangeByNumbers_1: React.FC<
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
        d="M7 21v-6.05c0-.575 0-.863-.23-.934C6.262 13.859 5.5 15 5.5 15M7 21H5.5M7 21h1.5M9 6.501v-1.75c0-.825 0-1.237-.293-1.494S7.943 3.001 7 3.001s-1.414 0-1.707.256C5 3.514 5 3.926 5 4.751s0 1.237.293 1.494S6.057 6.5 7 6.5zm0 0v.875c0 1.237 0 1.856-.44 2.24-.439.385-1.146.385-2.56.385H5M16.5 20V4m0 16c-.7 0-2.008-1.994-2.5-2.5m2.5 2.5c.7 0 2.008-1.994 2.5-2.5"
      />
    </svg>
  );
};
export default ArrangeByNumbers_1;
