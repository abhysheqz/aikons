import React from "react";
const Train_01: React.FC<
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
        d="M20 18V2H4v16zM7 18l-2 4m12-4 2 4"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M4 15h2.5m11 0H20" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M4 12h16"
      />
    </svg>
  );
};
export default Train_01;
