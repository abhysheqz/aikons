import React from "react";
const Labs: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.5 21a3.5 3.5 0 0 1-3.5-3.5V3h7v14.5a3.5 3.5 0 0 1-3.5 3.5ZM22 3H11M16 7h-3M20 11h-7"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6 11s4 2.5 4 5.75C10 19.097 8.21 21 6 21s-4-1.903-4-4.25C2 13.5 6 11 6 11Z"
      />
    </svg>
  );
};
export default Labs;
