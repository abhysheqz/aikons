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
        fill="currentColor"
        d="M7.25 7a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0M4.25 19A5.75 5.75 0 0 1 10 13.25h4A5.75 5.75 0 0 1 19.75 19v2a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default User_03;
