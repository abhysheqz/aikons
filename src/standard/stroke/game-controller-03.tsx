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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.004 15.809c.223-3.494.88-6.05 1.436-7.535.28-.75.885-1.308 1.659-1.495 4.292-1.039 9.51-1.039 13.802 0 .773.187 1.378.745 1.659 1.495.556 1.485 1.212 4.041 1.435 7.535.132 2.07-2.803 3.339-4.495 4.191l-1.712-2.996a1 1 0 0 0-.868-.504H9.08a1 1 0 0 0-.868.504L6.5 20c-1.692-.852-4.628-2.12-4.496-4.191Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 4.5 6.963 4M19 4.5 17 4M9 13l-1.5-1.5m0 0L6 10m1.5 1.5L6 13m1.5-1.5L9 10M15.988 10h.01M17.988 13h.01"
      />
    </svg>
  );
};
export default GameController_03;
