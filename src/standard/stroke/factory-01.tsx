import React from "react";
const Factory_01: React.FC<
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
        d="M2 21h19M3 21c1.5-3 2.5-7 2.5-13h7c0 6 1 10 2.5 13"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 21c-2-2-3.5-5-3.5-9H13M12 4.265c1.17-1.637 2.668-1.637 3.838 0 .706 1.004 1.618.967 2.341-.037 1.153-1.637 2.65-1.637 3.821 0"
      />
    </svg>
  );
};
export default Factory_01;
