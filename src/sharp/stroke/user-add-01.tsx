import React from "react";
const UserAdd_01: React.FC<
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
        d="M15 8A5 5 0 1 0 5 8a5 5 0 0 0 10 0ZM17.5 21v-7M14 17.5h7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M3 20a7 7 0 0 1 11-5.745"
      />
    </svg>
  );
};
export default UserAdd_01;
