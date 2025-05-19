import React from "react";
const NotificationOff_02: React.FC<
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
        d="M14.5 20.5c-.644.619-1.527 1-2.5 1a3.6 3.6 0 0 1-2.5-1M22 22 2 2M18.5 14.5V9A6.5 6.5 0 0 0 7.93 3.93M17 17.5H3c1.5 0 2.5-2.066 2.5-3.693V9c0-.886.177-1.73.498-2.5"
      />
    </svg>
  );
};
export default NotificationOff_02;
