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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M3.5 21h3V9h-3zM17.5 8l2 2.5-2.5 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M19 10.502s-7.5 0-15-7.5M10.5 21h3v-8.5h-3zM17.5 21h3v-6h-3z"
      />
    </svg>
  );
};
export default ChartDown;
