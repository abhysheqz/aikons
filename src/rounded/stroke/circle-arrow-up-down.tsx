import React from "react";
const CircleArrowUpDown: React.FC<
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
        strokeWidth={1.55}
        d="M9.3 8.5v7m0-7c-.715 0-1.8 1.75-1.8 1.75M9.3 8.5c.704 0 1.8 1.75 1.8 1.75m3.6 5.25v-7m0 7c-.704 0-1.8-1.75-1.8-1.75m1.8 1.75c.704 0 1.8-1.75 1.8-1.75"
      />
    </svg>
  );
};
export default CircleArrowUpDown;
