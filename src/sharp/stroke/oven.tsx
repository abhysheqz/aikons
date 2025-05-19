import React from "react";
const Oven: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M6 5h4" />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 5.009V5"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M4 8h16M2 22h20" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 2H4v20h16z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M17 11H7v8h10z" />
    </svg>
  );
};
export default Oven;
