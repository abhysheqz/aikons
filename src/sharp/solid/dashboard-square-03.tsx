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
        fill="currentColor"
        d="M2.25 2.25h11v7h-11zM14.75 2.25h7v11h-7zM14.75 14.75h7v7h-7zM2.25 10.75h11v11h-11z"
      />
    </svg>
  );
};
export default DashboardSquare_03;
