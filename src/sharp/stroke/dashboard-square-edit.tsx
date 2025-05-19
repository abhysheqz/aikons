import React from "react";
const DashboardSquareEdit: React.FC<
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
        strokeWidth={1.5}
        d="m21 5-2-2-4.5 4.5L14 10l2.5-.5zM10.5 3H3v7.5h7.5zM10.5 13.5H3V21h7.5zM21 13.5h-7.5V21H21z"
      />
    </svg>
  );
};
export default DashboardSquareEdit;
