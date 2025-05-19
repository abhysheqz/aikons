import React from "react";
const UserTime_03: React.FC<
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
        d="m18.5 19-1.5-.6V16m-4 2a4 4 0 1 0 8 0 4 4 0 0 0-8 0ZM14 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM10 20H3v-2a5 5 0 0 1 5-5h4"
      />
    </svg>
  );
};
export default UserTime_03;
