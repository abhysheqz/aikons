import React from "react";
const Restaurant_01: React.FC<
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
        d="M15 10 4 21M18.083 3l-2.937 2.937c-.533.534-.8.8-.942 1.088a1.96 1.96 0 0 0 0 1.74c.142.287.409.554.942 1.087.534.534.8.8 1.089.944a1.96 1.96 0 0 0 1.74 0c.287-.143.554-.41 1.088-.944L22 6.916M20 4.997l-3 3M8.845 9.844c-1.365 1.365-3.237 1.706-4.944 0s-2.6-4.814-1.235-6.179 4.472-.47 6.179 1.236 1.365 3.578 0 4.943m0 0L20 21"
      />
    </svg>
  );
};
export default Restaurant_01;
