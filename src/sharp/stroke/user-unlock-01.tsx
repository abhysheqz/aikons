import React from "react";
const UserUnlock_01: React.FC<
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
        d="M14.502 8a5 5 0 1 0-10 0 5 5 0 0 0 10 0ZM16.237 15.674v-1.422a1.752 1.752 0 0 1 2.992-1.239M14.502 21h6.996v-5.107h-6.996z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M2.502 20A7 7 0 0 1 13 13.935"
      />
    </svg>
  );
};
export default UserUnlock_01;
