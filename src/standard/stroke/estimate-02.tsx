import React from "react";
const Estimate_02: React.FC<
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
        strokeWidth={1.5}
        d="M17.5 10.5v-6a2 2 0 0 0-2-2h-11a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.5 6.5h9M5.5 10.5h1M9.5 10.5h1M13.5 10.5h1M5.5 14.5h1M9.5 14.5h1M18.5 18l-1-.5V16m4 1.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
      />
    </svg>
  );
};
export default Estimate_02;
