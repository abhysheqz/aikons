import React from "react";
const Rectangular_01: React.FC<
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
        d="M8 2 4 6h13l4-4z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 17.955v-9.03m0 9.03h6m-6 0L4.546 21.4M21 2v15.544a1 1 0 0 1-.29.703L17 22l-13-.056V5.989m13 0v15.41"
      />
    </svg>
  );
};
export default Rectangular_01;
