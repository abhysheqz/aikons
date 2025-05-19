import React from "react";
const Cheese: React.FC<
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
        strokeWidth={2}
        d="M14.01 7.999H14M17.007 14.209h-.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7 15.209a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.999 10.999H2.003l13.996-7z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.001 10.983v9.018h11.003c0-1.255.956-1.967 1.938-2 .922 0 2.05.581 2.05 1.998h5.003v-8.928"
      />
    </svg>
  );
};
export default Cheese;
