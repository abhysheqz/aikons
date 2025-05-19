import React from "react";
const MouseLeftClick_05: React.FC<
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
        d="M10 2.318C10.73 2.111 11.56 2 12.5 2c6 0 7.5 4.51 7.5 10s-1.5 10-7.5 10S5 17.49 5 12q0-.765.041-1.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 5.5h-3V9h3zM12.5 5.5V2m0 10V9M5.5 12h14"
      />
      <circle
        cx={5.5}
        cy={5.5}
        r={2.5}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default MouseLeftClick_05;
