import React from "react";
const Speaker_01: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 22h16V2H4z"
      />
      <circle
        cx={12}
        cy={14.5}
        r={3.5}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M9 6h6" />
    </svg>
  );
};
export default Speaker_01;
