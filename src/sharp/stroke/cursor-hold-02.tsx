import React from "react";
const CursorHold_02: React.FC<
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
        d="M18 7.333 2 2l5.333 16L10 10z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m16.375 17.625 2.5-2.5M22 17a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
      />
    </svg>
  );
};
export default CursorHold_02;
