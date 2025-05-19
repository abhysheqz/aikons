import React from "react";
const SwipeLeft_05: React.FC<
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
        d="m6.25 20.735-4.922-7.124a1.696 1.696 0 0 1 2.707-2.04l1.838 2.24a.45.45 0 0 0 .776-.31V2.569a1.317 1.317 0 1 1 2.634 0v7.932a.45.45 0 0 0 .9 0V7.872c.189-.063.457-.107.568-.121s.25 0 .25 0c.655 0 1.256.229 1.728.61v3.14a.45.45 0 0 0 .9 0V8.75h.372c.854 0 1.617.39 2.121 1l.053.056V12.5a.45.45 0 0 0 .9 0V9.75a2.75 2.75 0 0 1 2.675 2.75v4.097a4.75 4.75 0 0 1-1.04 2.967l-.96 1.199v1.237a.75.75 0 0 1-.75.75H7a.75.75 0 0 1-.75-.75zM18.883 1.074a1 1 0 0 1 .617.924V3.5H22a1 1 0 1 1 0 2h-2.5v1.503a1 1 0 0 1-1.707.707l-2.5-2.503a1 1 0 0 1 0-1.413l2.5-2.503a1 1 0 0 1 1.09-.217"
      />
    </svg>
  );
};
export default SwipeLeft_05;
