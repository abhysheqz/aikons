import React from "react";
const UserStar_02: React.FC<
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
        d="M3.75 8a5.25 5.25 0 1 1 7.005 4.95 7.75 7.75 0 0 1 5.995 7.55v.75H1.25v-.75a7.75 7.75 0 0 1 5.995-7.55A5.25 5.25 0 0 1 3.75 8"
      />
      <path
        fill="currentColor"
        d="m18.5 7.84 1.265 2.653 2.985.244-2.154 2.086.605 2.927-2.701-1.452-2.7 1.452.604-2.927-2.154-2.086 2.985-.244z"
      />
    </svg>
  );
};
export default UserStar_02;
