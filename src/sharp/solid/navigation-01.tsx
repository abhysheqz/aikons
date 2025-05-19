import React from "react";
const Navigation_01: React.FC<
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
        d="M9.25 12a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M11.944 1.25a.75.75 0 0 1 .645.36l3.051 5a.75.75 0 0 1-.877 1.101L12 6.791l-2.763.92a.75.75 0 0 1-.883-1.092l2.95-5a.75.75 0 0 1 .64-.369M15.587 16.533a.75.75 0 0 1 .053.857l-3.05 5a.75.75 0 0 1-1.287-.01l-2.949-5a.75.75 0 0 1 .883-1.092L12 17.21l2.763-.92a.75.75 0 0 1 .824.244M16.527 8.417a.75.75 0 0 1 .852-.063l5 2.95a.75.75 0 0 1 .01 1.285l-5 3.051a.75.75 0 0 1-1.102-.877l.92-2.763-.92-2.763a.75.75 0 0 1 .24-.82M7.47 8.417a.75.75 0 0 1 .24.82L6.789 12l.92 2.763a.75.75 0 0 1-1.101.877l-5-3.05a.75.75 0 0 1 .01-1.287l5-2.95a.75.75 0 0 1 .852.064"
      />
    </svg>
  );
};
export default Navigation_01;
