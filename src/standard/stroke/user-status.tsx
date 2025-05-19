import React from "react";
const UserStatus: React.FC<
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
        d="M15 9a3 3 0 1 0-6 0 3 3 0 0 0 6 0M22 19a3 3 0 1 0-6 0 3 3 0 0 0 6 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.853 13.72q.145-.839.147-1.72c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10q.881 0 1.72-.147"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 17a5 5 0 0 1 8.895-3.135"
      />
    </svg>
  );
};
export default UserStatus;
