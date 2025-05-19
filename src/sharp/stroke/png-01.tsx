import React from "react";
const Png_01: React.FC<
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
        d="M20 13V9l-7-7H4v11m9-10.5V9h6.5M4 22v-3m0 0v-3h2a1.5 1.5 0 0 1 0 3zm16-2v-1h-3.5v6H20v-2.5h-1M10 22v-6h.188l3.627 6H14v-6"
      />
    </svg>
  );
};
export default Png_01;
