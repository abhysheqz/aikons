import React from "react";
const TrafficJam_02: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M15 14h1v5H2v-5h1m12 0-1.5-5h-9L3 14m12 0H3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M19 18v-7h-1m0 0-1.5-5H7.25L6.5 8.5M18 11h-3.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M22 15V8h-1m0 0-1.5-5h-9.25L9.5 5.5M21 8h-3.5M11 18H7l-1 1h6zM13.5 16.5v.01M4.5 16.5v.01M2 21v-2h1v2zM16 19v2h-1v-2z"
      />
    </svg>
  );
};
export default TrafficJam_02;
