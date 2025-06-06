import React from "react";
const UserEdit_01: React.FC<
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
        d="M15.5 8a5 5 0 1 0-10 0 5 5 0 0 0 10 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.5 20A7 7 0 0 1 14 13.937M20.354 15.44l-1.293-1.294a.5.5 0 0 0-.707 0L14 18.5l-.5 2.5 2.5-.5 4.354-4.354a.5.5 0 0 0 0-.707"
      />
    </svg>
  );
};
export default UserEdit_01;
