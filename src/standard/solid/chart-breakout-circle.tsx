import React from "react";
const ChartBreakoutCircle: React.FC<
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
        d="M12 3a9 9 0 1 0 9 9 1 1 0 1 1 2 0c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1a1 1 0 1 1 0 2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16 1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1m5.209 1.795a1 1 0 0 1-.004 1.414l-1.5 1.493a1 1 0 1 1-1.41-1.418l1.5-1.493a1 1 0 0 1 1.414.004M19 8a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M11.576 7.617A1 1 0 0 1 12.5 7H16a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1.707.707l-.966-.966c-.386.343-.815.7-1.286 1.056C10.617 14.132 7.035 16 2.5 16a1 1 0 1 1 0-2c3.965 0 7.133-1.632 9.334-3.297.391-.296.75-.592 1.076-.879l-1.117-1.117a1 1 0 0 1-.217-1.09"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ChartBreakoutCircle;
