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
        fill="currentColor"
        d="M2.25 2.25h9v11h-9zM2.25 14.75h9v7h-9zM12.75 10.75h9v11h-9zM12.75 2.25h9v7h-9z"
      />
    </svg>
  );
};
export default DashboardSquare_02;
