import React from "react";
const UserStar_02: React.FC<
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
        d="M14 8.5a5 5 0 1 0-10 0 5 5 0 0 0 10 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 20.5a7 7 0 1 0-14 0M16.66 15l2.09-1.111L20.84 15l-.465-2.222L22 11.222l-2.268-.183L18.75 9l-.982 2.039-2.268.183 1.625 1.556z"
      />
    </svg>
  );
};
export default UserStar_02;
