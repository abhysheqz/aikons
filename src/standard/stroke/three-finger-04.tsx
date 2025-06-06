import React from "react";
const ThreeFinger_04: React.FC<
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
        d="M14 12.355V4a1.5 1.5 0 0 0-3 0v1m6 8V5.5a1.5 1.5 0 0 0-3 0M11 5v6.5M11 5a1.5 1.5 0 0 0-3 0v4m9.324 2H18.5a1.5 1.5 0 0 1 1.5 1.5v6a3 3 0 0 1-3 3H9.606a3 3 0 0 1-2.497-1.336l-2.605-3.908A3 3 0 0 1 4 14.592v-.35a3 3 0 0 1 .879-2.12L8 9m0 5V9"
      />
    </svg>
  );
};
export default ThreeFinger_04;
