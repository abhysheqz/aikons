import React from "react";
const AppleReminder: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm3 4.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m3.5.5a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM6.25 12a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m4.75-.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zm-3.5 4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m2.75 1.25a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AppleReminder;
