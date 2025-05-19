import React from "react";
const Desk_01: React.FC<
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
        d="M22 4H2M20 8.039H4M20 12.077h-6"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M14 8.039V20h6V8.039" />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M4.007 4v16M20.009 4.042V8.05"
      />
    </svg>
  );
};
export default Desk_01;
