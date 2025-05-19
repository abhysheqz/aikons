import React from "react";
const HangingClock: React.FC<
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
        d="M17.5 4.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M15.25 5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 5.25h1.5V7.5h14V6.25h1.5V7.5H21V9h-2.75v2.25h-1.5V9H14C7.787 9 2.75 14.037 2.75 20.25v1h-1.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.5 10.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m.75 5.287V13.75h-1.5v3.214l2.085 1.042.671-1.341z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HangingClock;
