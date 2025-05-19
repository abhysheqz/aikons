import React from "react";
const UserShield_02: React.FC<
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
        d="M16 20.5a7 7 0 1 0-14 0M22 11.344V9.313c-1.571 0-2.75-.813-2.75-.813s-1.179.813-2.75.813v2.03c0 2.845 2.75 3.657 2.75 3.657S22 14.188 22 11.344"
      />
    </svg>
  );
};
export default UserShield_02;
