import React from "react";
const CalendarLock_01: React.FC<
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
        d="M15.735 16.175v-1.423a1.752 1.752 0 0 1 3.505 0v1.423m-5.24.218h6.996v5.605H14zM16.5 2v4m-9-4v4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M21 11V4H3v18h8M3 10h18"
      />
    </svg>
  );
};
export default CalendarLock_01;
