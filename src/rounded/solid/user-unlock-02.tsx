import React from "react";
const UserUnlock_02: React.FC<
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
        d="M4.25 8a5.25 5.25 0 1 1 7.005 4.95 7.75 7.75 0 0 1 5.995 7.55.75.75 0 0 1-.75.75h-14a.75.75 0 0 1-.75-.75 7.75 7.75 0 0 1 5.995-7.55A5.25 5.25 0 0 1 4.25 8"
      />
      <path
        fill="currentColor"
        d="M19 7.75a.75.75 0 0 0-.75.75v.75h2.25c.966 0 1.75.784 1.75 1.75v2a1.75 1.75 0 0 1-1.75 1.75h-3A1.75 1.75 0 0 1 15.75 13v-2c0-.698.409-1.3 1-1.582V8.5a2.25 2.25 0 0 1 3.75-1.677.75.75 0 0 1-1 1.118.74.74 0 0 0-.5-.191"
      />
    </svg>
  );
};
export default UserUnlock_02;
