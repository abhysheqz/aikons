import React from "react";
const Restaurant_02: React.FC<
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
        d="m4 21 3-3M15 10l-1 1M18.084 3l-3.51 3.51a1.96 1.96 0 0 0 0 2.77l1.146 1.146a1.96 1.96 0 0 0 2.77 0L22 6.916M20 5l-3 3M20 21l-8-8m0 0L2 3c0 3.841 1.526 7.525 4.243 10.242L9 15.999z"
      />
    </svg>
  );
};
export default Restaurant_02;
