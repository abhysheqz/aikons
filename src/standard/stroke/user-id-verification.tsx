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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 9.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 17.5a5 5 0 0 0-10 0M16 3h3a2 2 0 0 1 2 2v3M8 3H5a2 2 0 0 0-2 2v3m5 13H5a2 2 0 0 1-2-2v-3m13 5h3a2 2 0 0 0 2-2v-3"
      />
    </svg>
  );
};
export default UserIdVerification;
