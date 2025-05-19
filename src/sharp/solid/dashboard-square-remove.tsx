import React from "react";
const DashboardSquareRemove: React.FC<
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
        d="M21.75 5.75v2h-9v-2zM2.25 2.25h9v9h-9zM2.25 12.75h9v9h-9zM12.75 12.75h9v9h-9z"
      />
    </svg>
  );
};
export default DashboardSquareRemove;
