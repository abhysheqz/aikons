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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 3H4a1 1 0 0 0-1 1v7.5a1 1 0 0 0 1 1h5.5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM9.5 15.5H4a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1h5.5a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1ZM20 11.5h-5.5a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1H20a1 1 0 0 0 1-1v-7.5a1 1 0 0 0-1-1ZM20 3h-5.5a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
      />
    </svg>
  );
};
export default DashboardSquare_02;
