import React from "react";
const User: React.FC<
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
        d="M6.75 8a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0"
      />
      <path
        fill="currentColor"
        d="M4.25 20.5a7.75 7.75 0 0 1 15.5 0 .75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75"
      />
    </svg>
  );
};
export default User;
