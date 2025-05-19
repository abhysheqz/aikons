import React from "react";
const Forward_01: React.FC<
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
        d="M8 19V5l12 7z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M4 4v16" />
    </svg>
  );
};
export default Forward_01;
