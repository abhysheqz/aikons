import React from "react";
const UserIdVerification: React.FC<
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
        d="M8.75 9a3.25 3.25 0 1 1 4.667 2.926A5.75 5.75 0 0 1 17.75 17.5a.75.75 0 0 1-.75.75H7a.75.75 0 0 1-.75-.75 5.75 5.75 0 0 1 4.333-5.574A3.25 3.25 0 0 1 8.75 9"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 5a3 3 0 0 1 3-3h3a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v3a1 1 0 0 1-2 0zm13-2a1 1 0 0 1 1-1h3a3 3 0 0 1 3 3v3a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-3a1 1 0 0 1-1-1M3 15a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h3a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-3a1 1 0 0 1 1-1m18 0a1 1 0 0 1 1 1v3a3 3 0 0 1-3 3h-3a1 1 0 1 1 0-2h3a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserIdVerification;
