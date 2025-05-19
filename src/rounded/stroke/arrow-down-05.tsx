import React from "react";
const ArrowDown_05: React.FC<
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
        d="M6 19.999h12M11.996 4.002v7.528m2.51 3.06 1.444-1.952a.696.696 0 0 0-.566-1.108h-6.71a.696.696 0 0 0-.573 1.1l1.402 1.96 1.941 2.366a.706.706 0 0 0 1.087.005z"
      />
    </svg>
  );
};
export default ArrowDown_05;
