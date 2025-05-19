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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm6.125 4h-2.5v2.5h2.5zm2.25 2h6v-1.5h-6zm-4.75 2.5h2.5v2.5h-2.5zm10.75 2h-6v-1.5h6zm-8.25 2.5h-2.5v2.5h2.5zm2.25 2h6v-1.5h-6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AppleReminder;
