import React from "react";
const ComputerProgramming_01: React.FC<
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
        d="M22 2.5H2v15h20z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M14 21.5v-4m-4 4v-4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7 21.5h10M15.004 6.996l3.004 2.997-3.01 3.009m-2.005-6.996L11 14.002m-1.99-7.007-3.007 3L9.008 13"
      />
    </svg>
  );
};
export default ComputerProgramming_01;
