import React from "react";
const Tick_03: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M17.575 3.573a1.75 1.75 0 0 1 2.533-.06l2.051 2.05a1.75 1.75 0 0 1 0 2.476L10.073 20.124a1.75 1.75 0 0 1-2.475 0L2.513 15.04a1.75 1.75 0 0 1 0-2.475l1.585-1.586a1.75 1.75 0 0 1 2.475 0l2.237 2.237z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tick_03;
