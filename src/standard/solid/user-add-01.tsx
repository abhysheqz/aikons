import React from "react";
const UserAdd_01: React.FC<
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
        d="M17.25 12.75a1 1 0 0 1 1 1v2.5h2.5a1 1 0 1 1 0 2h-2.5v2.5a1 1 0 1 1-2 0v-2.5h-2.5a1 1 0 1 1 0-2h2.5v-2.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15 20.75H3a.75.75 0 0 1-.75-.75 7.75 7.75 0 0 1 5.995-7.55A5.252 5.252 0 0 1 10 2.25a5.25 5.25 0 0 1 1.755 10.2A7.7 7.7 0 0 1 15 14.078V15h-1.25a2.25 2.25 0 0 0 0 4.5H15z"
      />
    </svg>
  );
};
export default UserAdd_01;
