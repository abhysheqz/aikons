import React from "react";
const BarCode_02: React.FC<
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
        d="M7.375 4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75zM2.125 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1M5.125 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1M15.125 3a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1M17.375 4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BarCode_02;
