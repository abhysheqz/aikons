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
        d="M2.25 4c0-.966.784-1.75 1.75-1.75h5.5c.966 0 1.75.784 1.75 1.75v7.5a1.75 1.75 0 0 1-1.75 1.75H4a1.75 1.75 0 0 1-1.75-1.75zM2.25 16.5c0-.966.784-1.75 1.75-1.75h5.5c.966 0 1.75.784 1.75 1.75V20a1.75 1.75 0 0 1-1.75 1.75H4A1.75 1.75 0 0 1 2.25 20zM12.75 12.5c0-.966.784-1.75 1.75-1.75H20c.966 0 1.75.784 1.75 1.75V20A1.75 1.75 0 0 1 20 21.75h-5.5A1.75 1.75 0 0 1 12.75 20zM12.75 4c0-.966.784-1.75 1.75-1.75H20c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0 1 20 9.25h-5.5a1.75 1.75 0 0 1-1.75-1.75z"
      />
    </svg>
  );
};
export default DashboardSquare_02;
