import React from "react";
const RepeatOne_02: React.FC<
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
        d="m8.5 21.5-3-2.5H15c3.526 0 6.515-2.608 7-6M3.255 16A7 7 0 0 1 9 5h8l-3-2.5M22 9V3l-1.5 1"
      />
    </svg>
  );
};
export default RepeatOne_02;
