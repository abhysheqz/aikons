import React from "react";
const DashboardSquareAdd: React.FC<
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
        fillRule="evenodd"
        d="M18.25 2.25v3.5h3.5v2h-3.5v3.5h-2v-3.5h-3.5v-2h3.5v-3.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.25 2.25h9v9h-9zM2.25 12.75h9v9h-9zM12.75 12.75h9v9h-9z"
      />
    </svg>
  );
};
export default DashboardSquareAdd;
