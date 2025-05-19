import React from "react";
const ChartLineData_01: React.FC<
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
        d="M21 21H3V3"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.5 20.5c.44-3.156 4.176-11.736 6.928-11.736 1.902 0 2.395 3.871 4.258 3.871C17.893 12.635 17.428 4 21 4"
      />
    </svg>
  );
};
export default ChartLineData_01;
