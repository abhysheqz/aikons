import React from "react";
const Chimney: React.FC<
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
        d="m15.5 22-1.117-5.024a37 37 0 0 1-.883-8.049.93.93 0 0 0-.928-.927H7.428a.927.927 0 0 0-.927.927 37 37 0 0 1-.883 8.049L4.5 22M3 22h14M17 2h-4a3 3 0 0 0-3 3M20 2h1M13 5h6"
      />
    </svg>
  );
};
export default Chimney;
