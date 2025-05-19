import React from "react";
const TrafficJam_01: React.FC<
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
        d="M15 13h1v5H2v-5h1m12 0-1.5-5h-9L3 13m12 0H3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M16 14h6V9h-1m0 0-1.5-5h-9.45L9 7.5M21 9h-7M11 17H7l-1 1h6zM13.5 15.5v.01M4.5 15.5v.01M2 20v-2h1v2zM16 18v2h-1v-2zM19.5 11.5v.01M20.5 14H22v2h-1.5z"
      />
    </svg>
  );
};
export default TrafficJam_01;
