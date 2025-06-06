import React from "react";
const Garlands: React.FC<
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
        d="M22 3c-2.156 1.809-5.83 3-10 3C7.833 6 4.159 4.809 2 3M10 6v5l2-1.5 2 1.5V6M3.5 4.5 2 9.499l2.5-1 1.5 2L7.5 6M20.5 4.502 22 9.5l-2.5-1-1.5 2-1.5-4.5M22 13c-2.157 1.809-5.83 3-10 3s-7.843-1.191-10-3M10 16v5l2-1.5 2 1.5v-5M3.5 14.5l-1.5 5 2.5-1 1.5 2L7.5 16M20.5 14.5l1.5 5-2.5-1-1.5 2-1.5-4.5"
      />
    </svg>
  );
};
export default Garlands;
