import React from "react";
const MessageLock_02: React.FC<
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
        strokeWidth={1.5}
        d="M20.355 5.5V4c0-1.105-.889-2-1.985-2a1.99 1.99 0 0 0-1.984 2v1.5m-1.489 0h6.946V11h-6.946z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.916 12.5h.009m-3.973 0h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.686 2.987c-7.8 1.02-9.708 10.009-6.065 15l-1.587 3.876c-.032.08.045.16.125.13L6.44 20.5c2.716 1.494 7.26 1.582 10.473.275 1.345-.724 4.365-2.327 4.92-7.232M9.686 2.987q.228-.013.46-.013m-.46.013 1.341-.005 1.654.005"
      />
    </svg>
  );
};
export default MessageLock_02;
