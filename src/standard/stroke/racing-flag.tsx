import React from "react";
const RacingFlag: React.FC<
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
        d="M5.672 13.91C10 15.932 14 7.842 21 11.887l-3-9.102C13.424-.3 8.563 6.856 3 4.625L8 22"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 7.496C14 3.679 9 12.266 4.5 9.404M8 4.905 10.823 13m2.354-10L16 10.619"
      />
    </svg>
  );
};
export default RacingFlag;
