import React from "react";
const NotificationSquare: React.FC<
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
        d="M1.25 3A.75.75 0 0 1 2 2.25h11.756a5.75 5.75 0 0 0 7.994 7.994V22a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75zM11 11.75H7v-1.5h4zm-4 3.5v1.5h8v-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.25 5.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
      />
    </svg>
  );
};
export default NotificationSquare;
