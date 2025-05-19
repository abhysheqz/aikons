import React from "react";
const UserRemove_01: React.FC<
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
        d="M14.5 8a5 5 0 1 0-10 0 5 5 0 0 0 10 0M15.5 21l3-3m0 0 3-3m-3 3-3-3m3 3 3 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.5 20A7 7 0 0 1 13 13.937"
      />
    </svg>
  );
};
export default UserRemove_01;
