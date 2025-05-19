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
        d="M2 2h7v2H4v5H2zm13 0h7v7h-2V4h-5zM4 15v5h5v2H2v-7zm18 0v7h-7v-2h5v-5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserIdVerification;
