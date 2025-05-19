import React from "react";
const Csv_01: React.FC<
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
        d="M4 13V4.002a2 2 0 0 1 2.002-2l6.994.008L20 9v4M13 2.5V7a2 2 0 0 0 2 2h4.5M13 16h-2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2m5.5-6 2.25 6L20 16M7.5 21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 1 1"
      />
    </svg>
  );
};
export default Csv_01;
