import React from "react";
const TimeManagement: React.FC<
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
        d="M15.25 17a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75zM1.25 17a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.001 14a1 1 0 0 1 1-1H19a1 1 0 0 1 1 1v3h-2v-2H6v2H4zM12 1.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m.207 6.457 2-2-1.414-1.414-2 2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TimeManagement;
