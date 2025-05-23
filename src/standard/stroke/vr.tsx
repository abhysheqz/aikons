import React from "react";
const Vr: React.FC<
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
        d="M5 6h2M10 17l2 1.99L10 21m5-2c3.5-.5 6-2 7-4M2 15c1 2 4.5 4 9.51 3.99"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 10V6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-3.095a3 3 0 0 1-2.304-1.08L12 10l-1.6 1.92A3 3 0 0 1 8.095 13H5a3 3 0 0 1-3-3Z"
      />
    </svg>
  );
};
export default Vr;
