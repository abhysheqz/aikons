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
        fillRule="evenodd"
        d="M4.25 7a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0M1.25 19A5.75 5.75 0 0 1 7 13.25h4A5.75 5.75 0 0 1 16.75 19v2a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.375 11.464a4.75 4.75 0 1 0 0-8.929A6.23 6.23 0 0 1 15.251 7c0 1.749-.718 3.33-1.876 4.464M18.12 21.75h3.878a.75.75 0 0 0 .75-.75v-2a5.75 5.75 0 0 0-5.75-5.75h-1.584A7.24 7.24 0 0 1 18.248 19v2c0 .263-.046.515-.128.75"
      />
    </svg>
  );
};
export default UserMultiple_02;
