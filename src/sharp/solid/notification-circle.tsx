import React from "react";
const NotificationCircle: React.FC<
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
        d="M14.25 5.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.5 11.25a5.75 5.75 0 0 1-4.14-9.74c-.76-.17-1.55-.26-2.36-.26C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12c0-.81-.09-1.6-.26-2.36a5.73 5.73 0 0 1-3.99 1.61m-6.5-.5H8v-1.5h4zm-4 3.5v1.5h8v-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NotificationCircle;
