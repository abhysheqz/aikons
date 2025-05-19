import React from "react";
const DashboardSquare_02: React.FC<
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
        d="M10.5 3H3v9.5h7.5zM10.5 15.5H3V21h7.5zM21 11.5h-7.5V21H21zM21 3h-7.5v5.5H21z"
      />
    </svg>
  );
};
export default DashboardSquare_02;
