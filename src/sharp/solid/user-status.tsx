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
        fill="currentColor"
        d="M15.25 19a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12c0 1.118-.17 2.197-.488 3.21a5 5 0 0 0-7.051 7.051 10.8 10.8 0 0 1-3.211.489C6.063 22.75 1.25 17.937 1.25 12M12 5.25a3.25 3.25 0 0 0-1.417 6.176 5.75 5.75 0 0 0-4.332 5.46v.306C7.657 18.626 9.832 19.75 12 19.75q.4 0 .79-.04a6.251 6.251 0 0 1 3.62-6.4 5.75 5.75 0 0 0-2.993-1.884A3.25 3.25 0 0 0 12 5.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserStatus;
