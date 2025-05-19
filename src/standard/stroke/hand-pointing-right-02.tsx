import React from "react";
const HandPointingRight_02: React.FC<
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
        d="M9.5 8h4m0 0h6.25a1.75 1.75 0 1 1 0 3.5H13.5V16a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3V9.584a2 2 0 0 1 .908-1.676l2.95-1.92C7.684 5.115 8.297 5.016 8.97 5a3 3 0 0 1 .895.115c.646.184 1.19.66 2.28 1.614z"
      />
    </svg>
  );
};
export default HandPointingRight_02;
