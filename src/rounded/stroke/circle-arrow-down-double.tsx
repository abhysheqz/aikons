import React from "react";
const CircleArrowDownDouble: React.FC<
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
        d="M15 12.915S12.79 15.5 12 15.5s-3-2.585-3-2.585M15 8.5s-2.21 2.585-3 2.585S9 8.5 9 8.5"
      />
    </svg>
  );
};
export default CircleArrowDownDouble;
