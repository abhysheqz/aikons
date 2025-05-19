import React from "react";
const ArrowUpLeft_01: React.FC<
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
        fill="currentColor"
        d="M5 6.031a.997.997 0 0 1 1.022-1.03L13 5a1 1 0 0 1 0 2H8.414l10.293 10.293a1 1 0 1 1-1.414 1.414L7 8.415V13a1 1 0 1 1-2 0z"
      />
    </svg>
  );
};
export default ArrowUpLeft_01;
