import React from "react";
const ArrowExpandDiagonal_02: React.FC<
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
        d="m8 16 8-8M9 3H3v6M15 21h6v-6"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m20.727 20.728-5.739-5.74M9 9 3.262 3.261"
      />
    </svg>
  );
};
export default ArrowExpandDiagonal_02;
