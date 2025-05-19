import React from "react";
const UserGroup_03: React.FC<
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
        d="M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0M16 4a3 3 0 0 1 1.218 5.742M14 14h-4a4 4 0 0 0-4 4v2h12v-2a4 4 0 0 0-4-4M18 13a4 4 0 0 1 4 4v2h-1.5M8 4a3 3 0 0 0-1.218 5.742M6 13a4 4 0 0 0-4 4v2h1.5"
      />
    </svg>
  );
};
export default UserGroup_03;
