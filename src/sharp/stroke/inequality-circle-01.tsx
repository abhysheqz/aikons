import React from "react";
const InequalityCircle_01: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 16h8m0-3H8l6-5"
      />
    </svg>
  );
};
export default InequalityCircle_01;
