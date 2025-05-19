import React from "react";
const Cone_01: React.FC<
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
        d="M21 18c0-2.21-4.03-4-9-4s-9 1.79-9 4 4.03 4 9 4 9-1.79 9-4Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m20.5 16.5-4.344-9.106C14.343 3.798 13.436 2 12 2S9.657 3.798 7.844 7.394L3.5 16.5"
      />
    </svg>
  );
};
export default Cone_01;
