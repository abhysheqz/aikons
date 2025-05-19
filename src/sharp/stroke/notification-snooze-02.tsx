import React from "react";
const NotificationSnooze_02: React.FC<
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
        d="M18.5 11v3.307C18.5 15.934 20 18 21 18H3c1.5 0 2.5-2.066 2.5-3.693V9.5A6.5 6.5 0 0 1 13 3.076M14.5 21c-.644.619-1.527 1-2.5 1a3.6 3.6 0 0 1-2.5-1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M16 2h5v.5l-5 5V8h5"
      />
    </svg>
  );
};
export default NotificationSnooze_02;
