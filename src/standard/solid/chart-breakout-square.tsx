import React from "react";
const ChartBreakoutSquare: React.FC<
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
        d="M15.555 1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1m5.209 1.795a1 1 0 0 1-.004 1.414l-1.5 1.493a1 1 0 1 1-1.41-1.418l1.5-1.493a1 1 0 0 1 1.413.004M18.554 8a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 3.5a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V12a1 1 0 1 1 2 0v7.5a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-15a3 3 0 0 1 3-3h7.556a1 1 0 0 1 0 2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.13 7.617A1 1 0 0 1 12.056 7h3.5a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1.707.707l-.966-.966c-.386.343-.815.7-1.286 1.056C10.172 14.132 6.59 16 2.055 16a1 1 0 1 1 0-2c3.965 0 7.132-1.632 9.334-3.297.39-.296.75-.592 1.076-.879l-1.117-1.117a1 1 0 0 1-.217-1.09"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ChartBreakoutSquare;
