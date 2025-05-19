import React from "react";
const CircleArrowLeftDouble: React.FC<
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
        d="M11.085 15S8.5 12.79 8.5 12s2.585-3 2.585-3m4.415 6s-2.585-2.21-2.585-3S15.5 9 15.5 9"
      />
    </svg>
  );
};
export default CircleArrowLeftDouble;
