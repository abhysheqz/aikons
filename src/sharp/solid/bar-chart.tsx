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
        d="M9.25 3.25h5.5v17.5h-5.5zM16.25 3.25h5.5v7.5h-5.5zM2.25 3.25h5.5v11.5h-5.5z"
      />
    </svg>
  );
};
export default BarChart;
