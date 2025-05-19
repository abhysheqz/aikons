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
        d="M3.5 20A7 7 0 0 1 14 13.937M20.189 14.934l-.623-.623a1.063 1.063 0 0 0-1.503 0l-3.349 3.35a3.2 3.2 0 0 0-.872 1.628L13.5 21l1.71-.342a3.2 3.2 0 0 0 1.63-.872l3.349-3.349a1.063 1.063 0 0 0 0-1.503"
      />
    </svg>
  );
};
export default UserEdit_01;
