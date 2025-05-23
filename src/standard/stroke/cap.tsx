import React from "react";
const Cap: React.FC<
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
        d="M2.5 17s-.433-1.335-.476-2C1.664 9.328 5.35 4 12 4s10.337 5.328 9.976 11c-.043.665-.476 2-.476 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.016 11c-.203-3.205 1.579-7 3.976-7m3.992 7c.203-3.205-1.579-7-3.976-7M12 3.5V2M21.5 16.917c-8.5-2.556-11.5-2.556-19 0L4 22s4-2.037 8-2.037S20 22 20 22z"
      />
    </svg>
  );
};
export default Cap;
