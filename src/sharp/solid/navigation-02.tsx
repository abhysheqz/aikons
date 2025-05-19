import React from "react";
const Navigation_02: React.FC<
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
        d="M11.944 1.25a.75.75 0 0 1 .646.36l3.05 5A.75.75 0 0 1 15 7.75H9a.75.75 0 0 1-.646-1.131l2.95-5a.75.75 0 0 1 .64-.369M8.349 16.628A.75.75 0 0 1 9 16.25h6a.75.75 0 0 1 .64 1.14l-3.05 5a.75.75 0 0 1-1.287-.009l-2.949-5a.75.75 0 0 1-.005-.753M16.628 8.349a.75.75 0 0 1 .753.005l5 2.95a.75.75 0 0 1 .01 1.286l-5 3.05A.75.75 0 0 1 16.25 15V9a.75.75 0 0 1 .378-.651M7.372 8.349A.75.75 0 0 1 7.75 9v6a.75.75 0 0 1-1.14.64l-5-3.05a.75.75 0 0 1 .009-1.287l5-2.949a.75.75 0 0 1 .753-.005M9.25 12a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
    </svg>
  );
};
export default Navigation_02;
