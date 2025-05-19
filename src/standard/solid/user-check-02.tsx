import React from "react";
const UserCheck_02: React.FC<
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
        d="M7.245 12.95A7.75 7.75 0 0 0 1.25 20.5c0 .414.336.75.75.75h14a.75.75 0 0 0 .75-.75 7.75 7.75 0 0 0-5.995-7.55A5.252 5.252 0 0 0 9 2.75a5.25 5.25 0 0 0-1.755 10.2"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.393 8.234a1 1 0 0 1 .123 1.41l-4.2 5a1 1 0 0 1-1.432.102l-1.8-1.607a1 1 0 1 1 1.332-1.492l1.031.92 3.537-4.21a1 1 0 0 1 1.41-.123"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserCheck_02;
