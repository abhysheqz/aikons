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
        fill="currentColor"
        fillRule="evenodd"
        d="M20.492 15.268V14.25a2.502 2.502 0 1 0-5.004 0v1.025a2.55 2.55 0 0 0-1.736 2.417v1.504a2.553 2.553 0 0 0 2.555 2.552h3.386a2.553 2.553 0 0 0 2.555-2.552v-1.504c0-1.131-.737-2.09-1.756-2.424m-3.504-1.018a1.002 1.002 0 0 1 2.004 0v.89h-2.005z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.238 13.865a7.7 7.7 0 0 0-2.98-1.415 5.252 5.252 0 0 0-1.756-10.2 5.25 5.25 0 0 0-1.755 10.2A7.75 7.75 0 0 0 1.752 20c0 .414.336.75.75.75h10.332c-.213-.474-.332-1-.332-1.554v-1.504c0-1.34.693-2.513 1.736-3.19z"
      />
    </svg>
  );
};
export default UserLock_01;
