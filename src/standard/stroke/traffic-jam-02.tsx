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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 14H4a2 2 0 0 0-2 2v3h14v-3a2 2 0 0 0-2-2M15 14l-.678-3.392A2 2 0 0 0 12.36 9H5.64a2 2 0 0 0-1.962 1.608L3 14"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 18H7l-1 1h6zM13.5 16.5v.01M4.5 16.5v.01M2 21v-2h1v2zM16 19v2h-1v-2zM14.5 11H17a2 2 0 0 1 2 2v5m-1-7-.678-3.392A2 2 0 0 0 15.36 6H8.64a2 2 0 0 0-1.962 1.608L6.5 9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 8H20a2 2 0 0 1 2 2v5m-1-7-.678-3.392A2 2 0 0 0 18.36 3h-6.72a2 2 0 0 0-1.962 1.608L9.5 6"
      />
    </svg>
  );
};
export default TrafficJam_02;
