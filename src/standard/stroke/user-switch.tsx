import React from "react";
const UserSwitch: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 17a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 0a4.5 4.5 0 0 1 4.5 4.5M17 17a4.5 4.5 0 0 0-4.5 4.5M7 7.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 0a4.5 4.5 0 0 1 4.5 4.5M7 7.5A4.5 4.5 0 0 0 2.5 12M3.5 15.5c0 2.764 2.236 5 5 5l-.5-2M18.5 8.5c0-2.764-2.236-5-5-5l.5 2"
      />
    </svg>
  );
};
export default UserSwitch;
