import React from "react";
const Airpod_01: React.FC<
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
        d="M18.5 2.5h-13a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3v-13a3 3 0 0 0-3-3Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.5 9h4.486M21.5 9h-4.486"
      />
      <rect
        width={10}
        height={4}
        x={7}
        y={7}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        rx={2}
      />
    </svg>
  );
};
export default Airpod_01;
