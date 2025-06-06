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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 13H4a2 2 0 0 0-2 2v3h14v-3a2 2 0 0 0-2-2M15 13l-.678-3.392A2 2 0 0 0 12.36 8H5.64a2 2 0 0 0-1.962 1.608L3 13"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 17H7l-1 1h6zM13.5 15.5v.01M4.5 15.5v.01M2 20v-2h1v2zM16 18v2h-1v-2zM19.5 11.5v.01M21 9l-.678-3.392A2 2 0 0 0 18.36 4h-6.92a2 2 0 0 0-1.96 1.608L9 8m5.5 1H20a2 2 0 0 1 2 2v3m0 0h-1.5m1.5 0v2h-1.5v-2m0 0H16"
      />
    </svg>
  );
};
export default TrafficJam_01;
