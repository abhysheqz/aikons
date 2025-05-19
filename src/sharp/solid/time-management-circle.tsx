import React from "react";
const TimeManagementCircle: React.FC<
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
        d="M1.25 19.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0M16.25 19.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.502 14a1 1 0 0 1 1-1H19.5a1 1 0 0 1 1 1v3h-2v-2H5.501v2h-2zM12 1.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m.207 6.457 2-2-1.414-1.414-2 2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TimeManagementCircle;
