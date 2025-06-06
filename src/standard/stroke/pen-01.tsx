import React from "react";
const Pen_01: React.FC<
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
        d="M3.5 17.121V20.5h3.379a1.5 1.5 0 0 0 1.06-.44L20.06 7.94a1.5 1.5 0 0 0 0-2.122l-1.879-1.879a1.5 1.5 0 0 0-2.121 0L3.94 16.061a1.5 1.5 0 0 0-.44 1.06M13.5 6.499l4 4"
      />
    </svg>
  );
};
export default Pen_01;
