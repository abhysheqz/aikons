import React from "react";
const DashboardSpeed_01: React.FC<
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
        d="M2.25 3A.75.75 0 0 1 3 2.25h18a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zm10.747 9.436a2.75 2.75 0 1 0 1.199.908l3.368-3.85-1.128-.988zM12 13.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M6.75 12a5.25 5.25 0 0 1 7.874-4.548l.752-1.299A6.75 6.75 0 0 0 5.25 12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DashboardSpeed_01;
