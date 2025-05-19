import React from "react";
const IceCubes: React.FC<
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
        d="M2 14.5h7v7H2zM12 15.5l5-5 5 5-5 5zM7.402 2.5 14 4.902 11.598 11.5 5 9.098z"
      />
    </svg>
  );
};
export default IceCubes;
