import React from "react";
const DashboardSpeed_02: React.FC<
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
        d="M13 10.5a1 1 0 1 0-2 0v5.17a3.001 3.001 0 1 0 2 0z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 4.5a9 9 0 0 0-9 9 1 1 0 1 1-2 0c0-6.075 4.925-11 11-11s11 4.925 11 11a1 1 0 1 1-2 0 9 9 0 0 0-9-9"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DashboardSpeed_02;
