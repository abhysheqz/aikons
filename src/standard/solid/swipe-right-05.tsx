import React from "react";
const SwipeRight_05: React.FC<
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
        d="M19.117 1.076a1 1 0 0 1 1.09.217l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5A1 1 0 0 1 18.5 7V5.5H16a1 1 0 1 1 0-2h2.5V2a1 1 0 0 1 .617-.924"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.25 20.733 1.329 13.61a1.696 1.696 0 0 1 2.707-2.04l1.838 2.24a.45.45 0 0 0 .776-.31V2.567a1.317 1.317 0 1 1 2.634 0V10.5a.45.45 0 1 0 .9 0V7.87c.189-.063.457-.107.568-.121s.25 0 .25 0c.655 0 1.256.229 1.728.61v3.14a.45.45 0 1 0 .9 0v-2.75h.372c.854 0 1.617.39 2.121 1l.053.05v2.7a.45.45 0 1 0 .9 0v-2.75a2.75 2.75 0 0 1 2.675 2.75v4.097a4.75 4.75 0 0 1-1.04 2.967l-.96 1.199v1.237a.75.75 0 0 1-.75.75H7a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default SwipeRight_05;
