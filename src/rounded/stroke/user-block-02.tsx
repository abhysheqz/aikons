import React from "react";
const UserBlock_02: React.FC<
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
        d="M14 8.5a5 5 0 1 0-10 0 5 5 0 0 0 10 0M20.953 9.547l-3.888 3.888M22 11.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 20.5a7 7 0 1 0-14 0"
      />
    </svg>
  );
};
export default UserBlock_02;
