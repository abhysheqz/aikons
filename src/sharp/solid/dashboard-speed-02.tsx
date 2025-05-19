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
        d="M8.25 17a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 8v6h-2V8z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 5.205A8.795 8.795 0 0 0 3.205 14H1.25C1.25 8.063 6.063 3.25 12 3.25S22.75 8.063 22.75 14h-1.954A8.795 8.795 0 0 0 12 5.205"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DashboardSpeed_02;
