import React from "react";
const ChartUp: React.FC<
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
        d="M20.5 21h-3V9h3zM16.5 3h3v3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M19 3.5s-4 5-14.5 8.5M13.5 21h-3v-8.5h3zM6.5 21h-3v-6h3z"
      />
    </svg>
  );
};
export default ChartUp;
