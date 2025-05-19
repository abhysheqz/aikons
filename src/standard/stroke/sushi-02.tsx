import React from "react";
const Sushi_02: React.FC<
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
        d="M13 9a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 9a5 5 0 1 0-10 0 5 5 0 0 0 10 0M2 18l20-5M6 22l.602-2.406M11 2 7.375 16.5"
      />
    </svg>
  );
};
export default Sushi_02;
