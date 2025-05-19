import React from "react";
const DashboardCircleEdit: React.FC<
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
        d="M10.5 6.75a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0ZM21 17.25a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0ZM10.5 17.25a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.854 4.44 19.56 3.145a.5.5 0 0 0-.707 0L14.5 7.5 14 10l2.5-.5 4.354-4.354a.5.5 0 0 0 0-.707Z"
      />
    </svg>
  );
};
export default DashboardCircleEdit;
