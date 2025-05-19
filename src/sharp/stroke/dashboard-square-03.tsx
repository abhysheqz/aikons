import React from "react";
const DashboardSquare_03: React.FC<
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
        d="M12.5 3H3v5.5h9.5zM21 3h-5.5v9.5H21zM21 15.5h-5.5V21H21zM12.5 11.5H3V21h9.5z"
      />
    </svg>
  );
};
export default DashboardSquare_03;
