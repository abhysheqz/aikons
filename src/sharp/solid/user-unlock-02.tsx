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
        d="M7.745 12.95A7.75 7.75 0 0 0 1.75 20.5v.75h15.5v-.75a7.75 7.75 0 0 0-5.995-7.55A5.252 5.252 0 0 0 9.5 2.75a5.25 5.25 0 0 0-1.755 10.2"
      />
      <path
        fill="currentColor"
        d="M19 7.75a.75.75 0 0 0-.75.75v.75h4v5.5h-6.5v-5.5h1V8.5a2.25 2.25 0 0 1 3.75-1.677l.559.5-1 1.118-.56-.5A.74.74 0 0 0 19 7.75"
      />
    </svg>
  );
};
export default UserUnlock_02;
