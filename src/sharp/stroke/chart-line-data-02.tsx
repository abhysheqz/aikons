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
      <circle
        cx={8.5}
        cy={10.5}
        r={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={14.5}
        cy={15.5}
        r={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={18.5}
        cy={7.5}
        r={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.434 14.296 18 9m-8.417 2.568 3.62 2.728M2.5 20.5l5.09-8.62M20 21H2V3"
      />
    </svg>
  );
};
export default ChartLineData_02;
