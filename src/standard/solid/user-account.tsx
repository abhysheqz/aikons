import React from "react";
const UserAccount: React.FC<
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
        d="M4 3.25A2.75 2.75 0 0 0 1.25 6v12A2.75 2.75 0 0 0 4 20.75h16A2.75 2.75 0 0 0 22.75 18V6A2.75 2.75 0 0 0 20 3.25zM3.75 16a4.75 4.75 0 0 1 3.55-4.597 2.25 2.25 0 1 1 2.402 0A4.75 4.75 0 0 1 13.249 16a.75.75 0 0 1-.75.75h-8a.75.75 0 0 1-.75-.75m10.5-7a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1m1 2.5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserAccount;
