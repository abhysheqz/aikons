import React from "react";
const Money_01: React.FC<
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
        strokeWidth={1.5}
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM22 9a4 4 0 0 1-4-4M2 9a4 4 0 0 0 4-4M22 15a4 4 0 0 0-4 4M2 15a4 4 0 0 1 4 4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M22 5H2v14h20z"
      />
    </svg>
  );
};
export default Money_01;
