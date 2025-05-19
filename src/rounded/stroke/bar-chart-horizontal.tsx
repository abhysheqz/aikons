import React from "react";
const BarChartHorizontal: React.FC<
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
        d="M3 4v10c0 2.828 0 4.243.879 5.121C4.757 20 6.172 20 9 20h12M7 16h9M7 12h13M7 8h6"
      />
    </svg>
  );
};
export default BarChartHorizontal;
