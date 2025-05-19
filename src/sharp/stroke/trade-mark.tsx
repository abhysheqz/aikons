import React from "react";
const TradeMark: React.FC<
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.006 15.483v-6.02m0 0h2.463m-2.463 0H5.52m7.015 6.059V9.554a.01.01 0 0 1 .017-.007l2.458 2.46 2.482-2.461a.01.01 0 0 1 .018.007v5.969"
      />
    </svg>
  );
};
export default TradeMark;
