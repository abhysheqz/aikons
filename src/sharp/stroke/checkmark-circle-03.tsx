import React from "react";
const CheckmarkCircle_03: React.FC<
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
        strokeWidth={1.5}
        d="M17 3.338A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10q-.002-1.03-.2-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M8 12.5s2 .5 3.5 3.5c0 0 5.559-9.167 10.5-11"
      />
    </svg>
  );
};
export default CheckmarkCircle_03;
