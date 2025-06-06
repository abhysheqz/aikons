import React from "react";
const DashboardCircleAdd: React.FC<
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
        d="M10.5 6.75a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0M21 17.25a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0M10.5 17.25a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0M17.25 3v7.5M21 6.75h-7.5"
      />
    </svg>
  );
};
export default DashboardCircleAdd;
