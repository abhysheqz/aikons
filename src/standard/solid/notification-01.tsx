import React from "react";
const Notification_01: React.FC<
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
        d="M10 19c0 1.116.878 2 1.976 2C13.094 21 14 20.095 14 19h2c0 2.219-1.82 4-4.024 4C9.75 23 8 21.198 8 19z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.25 12a7.75 7.75 0 1 1 15.5 0v1.737l1.836 2.295a.75.75 0 0 1 .164.468V18A1.75 1.75 0 0 1 20 19.75H4A1.75 1.75 0 0 1 2.25 18v-1.5a.75.75 0 0 1 .164-.468l1.836-2.295z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.728 3.553a1.75 1.75 0 0 1 1.66-2.303h1.225a1.75 1.75 0 0 1 1.66 2.303l-.56 1.684A.75.75 0 0 1 13 5.75h-2a.75.75 0 0 1-.712-.513z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Notification_01;
