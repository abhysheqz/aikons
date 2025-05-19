import React from "react";
const StreeringWheel: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M19 14c-2.5.5-4.5 2.5-5 5M5 14c2.5.5 4.5 2.5 5 5M19 11c-2.115-.64-4.49-1-7-1s-4.885.36-7 1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={3}
        d="M12.009 14H12"
      />
    </svg>
  );
};
export default StreeringWheel;
