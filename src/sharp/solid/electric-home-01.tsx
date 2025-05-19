import React from "react";
const ElectricHome_01: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="m21.85 10.938.9-1.2L12 1.75 1.25 9.738l.9 1.2 1.1-.75V21.5c0 .414.336.75.75.75h7.25v-3.5H10.1L7.75 15.227V11.25h1.501V9h1.5v2.25h2.5V9h1.5v2.25h1.5v3.977L13.9 18.75h-1.15v3.5h7a1 1 0 0 0 1-1V10.188z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ElectricHome_01;
