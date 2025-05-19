import React from "react";
const UserMultiple_02: React.FC<
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
        d="M4.25 7a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0M1.25 19A5.75 5.75 0 0 1 7 13.25h4A5.75 5.75 0 0 1 16.75 19 2.75 2.75 0 0 1 14 21.75H4A2.75 2.75 0 0 1 1.25 19"
      />
      <path
        fill="currentColor"
        d="M13.374 11.464a4.75 4.75 0 1 0 0-8.929A6.23 6.23 0 0 1 15.25 7c0 1.749-.718 3.33-1.876 4.464M17.24 21.75H20A2.75 2.75 0 0 0 22.75 19 5.75 5.75 0 0 0 17 13.25h-1.584A7.24 7.24 0 0 1 18.25 19c0 1.049-.38 2.009-1.01 2.75"
      />
    </svg>
  );
};
export default UserMultiple_02;
