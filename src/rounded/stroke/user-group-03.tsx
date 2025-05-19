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
        d="M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0M16 4a3 3 0 0 1 1.218 5.742M13.714 14h-3.428A4.286 4.286 0 0 0 6 18.286C6 19.233 6.767 20 7.714 20h8.572c.947 0 1.714-.767 1.714-1.714A4.286 4.286 0 0 0 13.714 14M17.714 13A4.286 4.286 0 0 1 22 17.286c0 .947-.767 1.714-1.714 1.714M8 4a3 3 0 0 0-1.218 5.742M3.714 19A1.714 1.714 0 0 1 2 17.286 4.286 4.286 0 0 1 6.286 13"
      />
    </svg>
  );
};
export default UserGroup_03;
