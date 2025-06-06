import React from "react";
const UserIdVerification: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M15 9.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M17 17.5a5 5 0 0 0-10 0M8 3H3v5m13-5h5v5m-5 13h5v-5M8 21H3v-5"
      />
    </svg>
  );
};
export default UserIdVerification;
