import React from "react";
const Scooter_02: React.FC<
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
        d="M2 16c0-3.182 2.239-5 5-5s5 1.818 5 5zM5 8h4M10 16a3 3 0 1 1-6 0"
      />
      <circle
        cx={20}
        cy={17}
        r={2}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 8Zm0 0c1.333.638 4 3.174 4 7m-4-7h3c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C17.398 5 16.928 5 15.99 5M16 8h-.01m0 0c0 1.913-.212 8-3.99 8h6.5m-2.51-8V5m0 0h-3.046"
      />
    </svg>
  );
};
export default Scooter_02;
