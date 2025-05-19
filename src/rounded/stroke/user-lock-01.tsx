import React from "react";
const UserLock_01: React.FC<
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
        d="M14.502 8a5 5 0 1 0-10 0 5 5 0 0 0 10 0M16.237 15.674v-1.422a1.752 1.752 0 0 1 3.505 0v1.422M16.307 21h3.386c.997 0 1.805-.807 1.805-1.802v-1.504c0-.995-.808-1.801-1.805-1.801h-3.386c-.997 0-1.805.806-1.805 1.801v1.504c0 .995.808 1.802 1.805 1.802"
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
export default UserLock_01;
