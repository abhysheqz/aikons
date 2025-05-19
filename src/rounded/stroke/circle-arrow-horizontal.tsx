import React from "react";
const CircleArrowHorizontal: React.FC<
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
        d="M17 12H7m10 0c0-.56-1.396-1.607-1.75-2M17 12c0 .56-1.396 1.607-1.75 2M7 12c0-.56 1.396-1.607 1.75-2M7 12c0 .56 1.396 1.607 1.75 2"
      />
    </svg>
  );
};
export default CircleArrowHorizontal;
