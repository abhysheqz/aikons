import React from "react";
const Summation_02: React.FC<
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
        d="M18.5 3H20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-1.5m-13 0H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1.5M15 9.5V8H9l3.5 4L9 16h6v-1.5"
      />
    </svg>
  );
};
export default Summation_02;
