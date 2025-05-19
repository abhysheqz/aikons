import React from "react";
const ChartBarLine: React.FC<
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
        d="M4 15v4M12 9v10M22 22H2M20 13v6M5.6 8.8a2 2 0 1 0-3.2 2.4 2 2 0 0 0 3.2-2.4Zm0 0 4.8-3.6m0 0a2 2 0 0 0 3.39-.305M10.4 5.2a2 2 0 1 1 3.39-.305m0 0 4.42 2.21m0 0a2 2 0 1 0 3.578 1.79 2 2 0 0 0-3.577-1.79Z"
      />
    </svg>
  );
};
export default ChartBarLine;
