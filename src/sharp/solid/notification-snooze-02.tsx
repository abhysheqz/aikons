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
        fill="currentColor"
        d="M7.842 20.5a4.29 4.29 0 0 0 3.783 2.25 4.29 4.29 0 0 0 3.782-2.25z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.375 1.25h7v1.914L17.289 7.25h4.086v2h-7V7.336L18.46 3.25h-4.086z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.125 2.405A7.25 7.25 0 0 0 4.375 9.5v5.307c0 .679-.213 1.467-.578 2.067-.374.616-.798.876-1.172.876v1.5h18v-1.5s-.248-.11-.351-.19a3.4 3.4 0 0 1-.658-.724c-.445-.642-.74-1.417-.74-2.029V10.5h-5.751z"
      />
    </svg>
  );
};
export default NotificationSnooze_02;
