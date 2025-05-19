import React from "react";
const ChartDown: React.FC<
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
        d="M4.5 21h1a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1M17.5 8l2 2.5-2.5 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 10.502s-7.5 0-15-7.5M11.5 21h1a1 1 0 0 0 1-1v-6.5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1M18.5 21h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1"
      />
    </svg>
  );
};
export default ChartDown;
