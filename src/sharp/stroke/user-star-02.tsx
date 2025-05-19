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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M14 8.5a5 5 0 1 0-10 0 5 5 0 0 0 10 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M16 20.5a7 7 0 1 0-14 0M17.482 14l1.768-.926 1.768.926-.393-1.852L22 10.852l-1.919-.153L19.25 9l-.831 1.7-1.919.152 1.375 1.296z"
      />
    </svg>
  );
};
export default UserStar_02;
