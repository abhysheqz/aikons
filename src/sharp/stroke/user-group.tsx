import React from "react";
const UserGroup: React.FC<
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
        d="M15.5 11a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M15.483 11.35q.484.149 1.017.15a3.5 3.5 0 1 0-3.483-3.85M10.983 7.65a3.5 3.5 0 1 0-2.466 3.7M22 16.5c0-2.761-2.462-5-5.5-5M17.5 19.5c0-2.761-2.462-5-5.5-5s-5.5 2.239-5.5 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M7.5 11.5c-3.038 0-5.5 2.239-5.5 5"
      />
    </svg>
  );
};
export default UserGroup;
