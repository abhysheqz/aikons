import React from "react";
const FireSecurity: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.5 16.5H14V22h7v-5.5h-1.5m-4 0V15a2 2 0 1 1 4 0v1.5m-4 0h4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.945 22C6.557 22 3 18.418 3 14c0-2.084.958-4.168 2.21-6 .256 1.5 1.365 4.4 3.749 4-2.624-5.5 1.986-10 1.986-10s.497 3.5 4.966 7q.62.486 1.089 1"
      />
    </svg>
  );
};
export default FireSecurity;
