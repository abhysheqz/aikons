import React from "react";
const NotificationCircle: React.FC<
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
      <path fill="currentColor" d="M14.75 5.25a4 4 0 1 1 8 0 4 4 0 0 1-8 0" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.731 1.354c.162.017.234.214.13.34a6 6 0 0 0 8.418 8.467c.125-.102.316-.034.338.124q.045.315.08.64.053.531.053 1.075c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12 6.063 1.25 12 1.25q.27 0 .537.013.618.03 1.194.091M7.25 10A.75.75 0 0 1 8 9.25h4a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M8 14.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NotificationCircle;
