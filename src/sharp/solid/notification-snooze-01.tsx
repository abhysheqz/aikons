import React from "react";
const NotificationSnooze_01: React.FC<
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
        fillRule="evenodd"
        d="M9.25 3.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0m2.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M9.5 18.75a2 2 0 1 0 4 0h2a4 4 0 0 1-8 0zM19.336 7H15.75V5h6.5v1.914L18.164 11h3.586v2h-6.5v-1.914z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.25 4.763a7.601 7.601 0 0 0-10.34 6.688l-.002.02v2.25L1.932 16.01a.75.75 0 0 0-.182.49v3.25h19.5V16.5a.75.75 0 0 0-.183-.49l-1.303-1.51H13.75v-4.036L15.714 8.5H14.25z"
      />
    </svg>
  );
};
export default NotificationSnooze_01;
