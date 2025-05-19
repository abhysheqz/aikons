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
        fill="currentColor"
        d="m18.695 2.25 3.055 3.055-5.181 5.181-3.819.764.764-3.819zM2.25 2.25h9v9h-9zM2.25 12.75h9v9h-9zM12.75 12.75h9v9h-9z"
      />
    </svg>
  );
};
export default DashboardSquareEdit;
