import React from "react";
const Calculator_01: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 10h16.5M15 6h2M20.5 21.5v-19h-17v19zM7 14h.526m4.21 0h.527m4.21 0H17M7 18h.526m4.21 0h.527m4.21 0H17"
      />
    </svg>
  );
};
export default Calculator_01;
