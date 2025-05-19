import React from "react";
const ChartLineData_02: React.FC<
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
        d="M7 10.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M13 15.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M17 7.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.436 8.1a1 1 0 0 1 .464 1.336l-2.566 5.296a1 1 0 0 1-1.8-.872L18.1 8.564a1 1 0 0 1 1.336-.464m-9.652 2.867a1 1 0 0 1 1.4-.197l3.622 2.728a1 1 0 0 1-1.204 1.597l-3.621-2.728a1 1 0 0 1-.197-1.4m-.686.051a1 1 0 0 1 .353 1.37l-5.09 8.62a1 1 0 1 1-1.722-1.016l5.09-8.621a1 1 0 0 1 1.369-.353"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 2a1 1 0 0 1 1 1v17h17a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ChartLineData_02;
