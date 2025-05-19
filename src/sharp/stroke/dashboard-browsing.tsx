import React from "react";
const DashboardBrowsing: React.FC<
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
        d="M21 3H3v18h18zM2.969 9h18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 6h.009M11 6h.009"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M17 17a5 5 0 0 0-10 0" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13.5 14.5-2.207 2.207"
      />
    </svg>
  );
};
export default DashboardBrowsing;
