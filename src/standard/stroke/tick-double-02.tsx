import React from "react";
const TickDouble_02: React.FC<
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
        d="m2 13.5 3.5 4 .955-1M16 6.5 10.75 12M8 13.5l3.5 4L22 6.5"
      />
    </svg>
  );
};
export default TickDouble_02;
