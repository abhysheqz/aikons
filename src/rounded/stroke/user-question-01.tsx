import React from "react";
const UserQuestion_01: React.FC<
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
        d="M14.5 8a5 5 0 1 0-10 0 5 5 0 0 0 10 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.5 20A7 7 0 0 1 13 13.937M15.5 14.846c0-1.02.895-1.846 2-1.846s2 .827 2 1.846c0 .368-.116.71-.317.998-.598.857-1.683 1.175-1.683 2.194v.462m-.01 2.5h.01"
      />
    </svg>
  );
};
export default UserQuestion_01;
