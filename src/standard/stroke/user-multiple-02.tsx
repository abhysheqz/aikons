import React from "react";
const UserMultiple_02: React.FC<
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
        d="M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M15 11a4 4 0 0 0 0-8M16 19a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5v2h14zM19 21h3v-2a5 5 0 0 0-5-5"
      />
    </svg>
  );
};
export default UserMultiple_02;
