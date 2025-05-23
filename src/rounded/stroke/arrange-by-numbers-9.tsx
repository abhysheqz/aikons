import React from "react";
const ArrangeByNumbers_9: React.FC<
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
        d="M7 10V3.95c0-.575 0-.862-.23-.933C6.263 2.859 5.5 4 5.5 4M7 10H5.5M7 10h1.5M9 17.5v-1.75c0-.825 0-1.237-.293-1.494S7.943 14 7 14s-1.414 0-1.707.256C5 14.513 5 14.925 5 15.75s0 1.237.293 1.494.764.256 1.707.256zm0 0v.875c0 1.237 0 1.856-.44 2.24C8.122 21 7.415 21 6 21H5M16.5 20V4m0 16c-.7 0-2.008-1.994-2.5-2.5m2.5 2.5c.7 0 2.009-1.994 2.5-2.5"
      />
    </svg>
  );
};
export default ArrangeByNumbers_9;
