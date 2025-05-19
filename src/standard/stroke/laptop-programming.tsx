import React from "react";
const LaptopProgramming: React.FC<
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
        d="M20 14.5v-11a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v11"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.5 7 17 8.5 15.5 10m-7-3L7 8.5 8.5 10M13 6l-2 5M3.33 21.5a1 1 0 0 1-.962-1.277L4.02 14.5h15.932l1.674 5.72a1 1 0 0 1-.96 1.28z"
      />
    </svg>
  );
};
export default LaptopProgramming;
