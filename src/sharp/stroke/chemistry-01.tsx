import React from "react";
const Chemistry_01: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M2 9h9m11 0h-5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M17 4v10.786C17 16.56 15.657 18 14 18s-3-1.44-3-3.214V4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 3v18h17"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M9 4h10" />
    </svg>
  );
};
export default Chemistry_01;
