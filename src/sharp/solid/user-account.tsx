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
        d="M22.75 3.25H1.25v17.5h21.5zM3.75 16a4.75 4.75 0 0 1 3.55-4.597 2.25 2.25 0 1 1 2.402 0A4.75 4.75 0 0 1 13.249 16v.75h-9.5zm10.5-4.5h6v2h-6zm6-3.5h-6v2h6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserAccount;
