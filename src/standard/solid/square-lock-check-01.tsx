import React from "react";
const SquareLockCheck_01: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M5 6.5a5.5 5.5 0 1 1 11 0V9a1 1 0 1 1-2 0V6.5a3.5 3.5 0 1 0-7 0V9a1 1 0 1 1-2 0zM22.14 15.232a1 1 0 0 1 .128 1.408l-5 6a1 1 0 0 1-1.475.067l-2.5-2.5a1 1 0 0 1 1.414-1.414l1.726 1.726 4.299-5.16a1 1 0 0 1 1.408-.127"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M4.5 8.25A2.75 2.75 0 0 0 1.75 11v9a2.75 2.75 0 0 0 2.75 2.75h9.214l-1.482-1.482a2.5 2.5 0 1 1 3.536-3.536l.564.565 2.918-3.502V11a2.75 2.75 0 0 0-2.75-2.75z"
      />
    </svg>
  );
};
export default SquareLockCheck_01;
