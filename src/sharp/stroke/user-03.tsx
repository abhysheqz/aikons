import React from "react";
const User_03: React.FC<
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
        strokeWidth={1.5}
        d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM19 19a5 5 0 0 0-5-5h-4a5 5 0 0 0-5 5v2h14z"
      />
    </svg>
  );
};
export default User_03;
