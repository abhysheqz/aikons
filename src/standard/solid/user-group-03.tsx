import React from "react";
const UserGroup_03: React.FC<
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
        d="M9.605 3.61a5 5 0 0 0-1.784 7.136A3.75 3.75 0 1 1 9.605 3.61m-1.324 8.64A6 6 0 0 0 4 18v1.75H2a.75.75 0 0 1-.75-.75v-2A4.75 4.75 0 0 1 6 12.25zm3.719-8a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m-2 9A4.75 4.75 0 0 0 5.25 18v2c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-2A4.75 4.75 0 0 0 14 13.25zM19.75 7a3.75 3.75 0 0 1-3.57 3.746 4.999 4.999 0 0 0-1.784-7.136A3.75 3.75 0 0 1 19.75 7M22 19.75h-2V18a6 6 0 0 0-4.28-5.75H18A4.75 4.75 0 0 1 22.75 17v2a.75.75 0 0 1-.75.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserGroup_03;
