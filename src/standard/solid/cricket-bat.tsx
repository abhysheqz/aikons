import React from "react";
const CricketBat: React.FC<
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
        d="M18.238 2.177a1.75 1.75 0 0 0-2.475 0l-8.707 8.707a2.75 2.75 0 0 0-.806 1.944v1.785L1.9 18.964A2.217 2.217 0 0 0 5.034 22.1l4.35-4.35H10.7a2.75 2.75 0 0 0 1.897-.759l9.178-8.741a1.75 1.75 0 0 0 .03-2.505zM7.976 17.037l-1.014-1.014-1.689 1.689 1.014 1.014zM2.96 20.025l1.253-1.253 1.014 1.015-1.253 1.252a.717.717 0 1 1-1.014-1.014M18.5 15.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CricketBat;
