import React from "react";
const PieChart_03: React.FC<
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
        d="M11.262 1.25C5.668 1.636 1.25 6.301 1.25 12s4.418 10.364 10.012 10.75zM12.764 22.75c5.346-.369 9.618-4.646 9.986-9.998h-9.986zM22.75 11.248c-.368-5.352-4.64-9.63-9.986-9.998v9.998z"
      />
    </svg>
  );
};
export default PieChart_03;
