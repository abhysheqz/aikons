import React from "react";
const CancelCircleHalfDot: React.FC<
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
        d="m16 8-4 4m0 0-4 4m4-4 4 4m-4-4L8 8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.25 12c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10M2.75 8.5a11.6 11.6 0 0 1 1.356-2.323m2.32-2.321A11.6 11.6 0 0 1 8.75 2.5"
      />
    </svg>
  );
};
export default CancelCircleHalfDot;
