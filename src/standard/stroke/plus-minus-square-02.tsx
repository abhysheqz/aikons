import React from "react";
const PlusMinusSquare_02: React.FC<
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
        d="M2.5 19.5a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-15a2 2 0 0 0-2-2h-15a2 2 0 0 0-2 2zM7 17 17 7M9 7v2m0 0v2m0-2h2M9 9H7m10 6h-4"
      />
    </svg>
  );
};
export default PlusMinusSquare_02;
