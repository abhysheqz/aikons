import React from "react";
const Shirt_01: React.FC<
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
        d="M6.174 12 2.003 7.91a.01.01 0 0 1 0-.013L5.997 3h2.999c0 1.5 1.167 2.943 3.003 2.943A2.96 2.96 0 0 0 14.997 3h3.005l3.996 4.897a.01.01 0 0 1 0 .013l-3.996 3.917"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M5.997 9v12h12V9" />
    </svg>
  );
};
export default Shirt_01;
