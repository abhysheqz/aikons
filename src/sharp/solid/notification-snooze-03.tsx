import React from "react";
const NotificationSnooze_03: React.FC<
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
        d="M8.96 20.409c.662.516 1.55.841 2.539.841s1.877-.325 2.538-.841l.923 1.182c-.93.727-2.145 1.159-3.461 1.159s-2.53-.432-3.462-1.159zM19.836 5H16.25V3h6.5v1.914L18.664 9h3.586v2h-6.5V9.086z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.5 1.25c-4.466 0-8.086 3.694-8.086 8.25v2.8L1.25 16.166l.46.404c2.235 1.96 5.82 3.181 9.79 3.181s7.555-1.22 9.79-3.181l.46-.404-2.053-3.665H14.25V8.464L16.214 6.5H14.75V1.943a7.9 7.9 0 0 0-3.25-.693"
      />
    </svg>
  );
};
export default NotificationSnooze_03;
