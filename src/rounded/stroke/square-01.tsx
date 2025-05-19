import React from "react";
const Square_01: React.FC<
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
        strokeWidth={1.5}
        d="M2.715 7.025c1.99-.105 3.24.052 4.02 1.886.82 2.2 2.85 8.33 3.358 9.744.547 1.519 1.25 2.567 4.138 2.305"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15 7.007c-2.863-.025-5.205 4.715-6.507 6.985-1.431 2.62-3.89 7.16-6.493 6.985"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 9h-4l3.2-2.4A2 2 0 1 0 18 5"
      />
    </svg>
  );
};
export default Square_01;
