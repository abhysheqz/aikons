import React from "react";
const GameController_03: React.FC<
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
        strokeWidth={1.5}
        d="M2.004 15.809c.223-3.494.88-6.05 1.436-7.535.281-.75.885-1.308 1.659-1.495 4.292-1.039 9.51-1.039 13.802 0 .774.187 1.378.745 1.659 1.495.556 1.485 1.212 4.041 1.435 7.535.133 2.07-2.587 3.339-4.279 4.191l-2.142-3.712H8.428L6.407 20c-1.692-.852-4.535-2.12-4.403-4.191Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 4.5 6.963 4M20 4.5 17 4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m9 13-1.5-1.5m0 0L6 10m1.5 1.5L6 13m1.5-1.5L9 10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.988 10h.01M17.988 13h.01"
      />
    </svg>
  );
};
export default GameController_03;
