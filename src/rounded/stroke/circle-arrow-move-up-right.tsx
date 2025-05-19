import React from "react";
const CircleArrowMoveUpRight: React.FC<
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
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 16v-.482c0-.897 0-1.345.058-1.72.32-2.064 1.901-3.683 3.918-4.01.367-.06 1.148-.06 2.024-.06M13.625 8l1.18 1.236a.72.72 0 0 1 0 .985l-1.18 1.236"
      />
    </svg>
  );
};
export default CircleArrowMoveUpRight;
