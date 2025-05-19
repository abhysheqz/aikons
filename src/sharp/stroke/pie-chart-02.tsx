import React from "react";
const PieChart_02: React.FC<
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
        d="M11 22a9 9 0 0 0 9-9h-9m0 9a9 9 0 1 1 0-18v9m0 9v-9M22 10a8 8 0 0 0-8-8v8z"
      />
    </svg>
  );
};
export default PieChart_02;
