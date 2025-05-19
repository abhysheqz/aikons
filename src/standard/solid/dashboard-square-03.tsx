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
        d="M2.25 4c0-.966.784-1.75 1.75-1.75h7.5c.966 0 1.75.784 1.75 1.75v3.5a1.75 1.75 0 0 1-1.75 1.75H4A1.75 1.75 0 0 1 2.25 7.5zM14.75 4c0-.966.784-1.75 1.75-1.75H20c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 20 13.25h-3.5a1.75 1.75 0 0 1-1.75-1.75zM14.75 16.5c0-.966.784-1.75 1.75-1.75H20c.966 0 1.75.784 1.75 1.75V20A1.75 1.75 0 0 1 20 21.75h-3.5A1.75 1.75 0 0 1 14.75 20zM2.25 12.5c0-.966.784-1.75 1.75-1.75h7.5c.966 0 1.75.784 1.75 1.75V20a1.75 1.75 0 0 1-1.75 1.75H4A1.75 1.75 0 0 1 2.25 20z"
      />
    </svg>
  );
};
export default DashboardSquare_03;
