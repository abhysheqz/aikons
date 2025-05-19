import React from "react";
const Notification_03: React.FC<
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
        d="M3.915 9.5c0-4.556 3.62-8.25 8.085-8.25s8.086 3.694 8.086 8.25v2.8l2.164 3.865-.46.404c-2.234 1.96-5.819 3.181-9.79 3.181s-7.555-1.22-9.79-3.181l-.46-.404 2.165-3.864z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.462 20.409c.66.516 1.549.841 2.538.841.99 0 1.877-.325 2.538-.841l.924 1.182c-.931.727-2.146 1.159-3.462 1.159s-2.53-.432-3.462-1.159z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Notification_03;
