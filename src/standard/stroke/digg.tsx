import React from "react";
const Digg: React.FC<
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
        d="M9 5v1.016m0 3.046V16M6 9H2v7h4zm0 0V5M15.504 16H11.5V9h4zm0 0v3H11.5M22 16h-4V9h4zm0 0v3h-4"
      />
    </svg>
  );
};
export default Digg;
