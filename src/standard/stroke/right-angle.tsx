import React from "react";
const RightAngle: React.FC<
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
        strokeWidth={1.5}
        d="M6 12h4a2 2 0 0 1 2 2v4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 18.5H6.5a1 1 0 0 1-1-1V3M21 18.5 18.5 16m2.5 2.5L18.5 21M5.5 3 8 5.5M5.5 3 3 5.5"
      />
    </svg>
  );
};
export default RightAngle;
