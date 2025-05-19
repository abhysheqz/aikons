import React from "react";
const ChartRadar: React.FC<
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
        d="M5.917 22h12.166L22 9.299 12 2 2 9.299z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m11.99 9.001 3.956 3.013-1.447 4.486H9l-.914-5.041zM2.5 9.5l5.5 2M14.5 16.5l3 5M16 12l5.5-2.5M6.5 21 9 16.5M12 9V2"
      />
    </svg>
  );
};
export default ChartRadar;
