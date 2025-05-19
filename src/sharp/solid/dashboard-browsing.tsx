import React from "react";
const DashboardBrowsing: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v5.25h19.5V3a.75.75 0 0 0-.75-.75zm3 2h2v2H6zm6 0h-2v2h2zM21.75 9.75H2.25V21c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75zM12 14.375a4.25 4.25 0 0 0-4.25 4.25h-1.5a5.75 5.75 0 0 1 11.5 0h-1.5a4.25 4.25 0 0 0-4.25-4.25m.969.982-2.207 2.208 1.06 1.06 2.208-2.207z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DashboardBrowsing;
