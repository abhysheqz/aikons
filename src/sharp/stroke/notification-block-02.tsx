import React from "react";
const NotificationBlock_02: React.FC<
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
        d="M18.5 11.5v2.807C18.5 15.934 20 18 21 18H3c1.5 0 2.5-2.066 2.5-3.693V9.5A6.5 6.5 0 0 1 12 3M14.5 21c-.644.619-1.527 1-2.5 1a3.6 3.6 0 0 1-2.5-1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m15.05 3.05 4.9 4.9M21 5.5a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0Z"
      />
    </svg>
  );
};
export default NotificationBlock_02;
