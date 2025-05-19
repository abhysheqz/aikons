import React from "react";
const Dead: React.FC<
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M9 16h6M10 11 8.5 9.5m0 0L7 8m1.5 1.5L7 11m1.5-1.5L10 8m7 3-1.5-1.5m0 0L14 8m1.5 1.5L14 11m1.5-1.5L17 8"
      />
    </svg>
  );
};
export default Dead;
