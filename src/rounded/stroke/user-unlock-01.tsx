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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.502 8a5 5 0 1 0-10 0 5 5 0 0 0 10 0M16.238 15.675v-1.423A1.752 1.752 0 0 1 19.215 13m-2.908 8h3.386c.997 0 1.805-.807 1.805-1.802v-1.503c0-.995-.808-1.802-1.805-1.802h-3.386c-.997 0-1.805.807-1.805 1.802v1.503c0 .995.808 1.802 1.805 1.802"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.502 20a7 7 0 0 1 11-5.745"
      />
    </svg>
  );
};
export default UserUnlock_01;
