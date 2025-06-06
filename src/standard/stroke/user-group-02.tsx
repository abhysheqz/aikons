import React from "react";
const UserGroup_02: React.FC<
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
        d="M16.5 19.5v-.732c0-.495-.174-.982-.549-1.305A6.04 6.04 0 0 0 12 16a6.04 6.04 0 0 0-3.951 1.463c-.375.323-.549.81-.549 1.305v.732"
      />
      <circle cx={12} cy={11} r={2.5} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 11c1.351 0 2.586.558 3.53 1.48.324.317.47.768.47 1.222v.798"
      />
      <circle
        cx={17.5}
        cy={6.5}
        r={2}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.5 11c-1.351 0-2.586.558-3.53 1.48-.324.317-.47.768-.47 1.222v.798"
      />
      <circle cx={6.5} cy={6.5} r={2} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
};
export default UserGroup_02;
