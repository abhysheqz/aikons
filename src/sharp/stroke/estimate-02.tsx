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
        strokeWidth={1.5}
        d="M17.5 11V2.5h-15v16H11"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.5 6.5h9M5.5 10.5h1M9.5 10.5h1M13.5 10.5h1M5.5 14.5h1M9.5 14.5h1"
      />
      <circle
        cx={17.5}
        cy={17.5}
        r={4}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m18.5 18-1-.5V16"
      />
    </svg>
  );
};
export default Estimate_02;
