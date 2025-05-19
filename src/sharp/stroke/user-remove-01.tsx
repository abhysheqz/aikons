import React from "react";
const UserRemove_01: React.FC<
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
        d="M14.5 7a5 5 0 1 0-10 0 5 5 0 0 0 10 0ZM15.5 20l3-3m0 0 3-3m-3 3-3-3m3 3 3 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M2.5 19A7 7 0 0 1 13 12.937"
      />
    </svg>
  );
};
export default UserRemove_01;
