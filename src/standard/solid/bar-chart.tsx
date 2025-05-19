import React from "react";
const BarChart: React.FC<
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
        d="M9.25 5c0-.966.784-1.75 1.75-1.75h2c.966 0 1.75.784 1.75 1.75v14A1.75 1.75 0 0 1 13 20.75h-2A1.75 1.75 0 0 1 9.25 19zM16.25 5c0-.966.784-1.75 1.75-1.75h2c.966 0 1.75.784 1.75 1.75v4A1.75 1.75 0 0 1 20 10.75h-2A1.75 1.75 0 0 1 16.25 9zM2.25 5c0-.966.784-1.75 1.75-1.75h2c.966 0 1.75.784 1.75 1.75v8A1.75 1.75 0 0 1 6 14.75H4A1.75 1.75 0 0 1 2.25 13z"
      />
    </svg>
  );
};
export default BarChart;
