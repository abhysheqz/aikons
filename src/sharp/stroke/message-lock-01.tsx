import React from "react";
const MessageLock_01: React.FC<
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
        d="M20.403 5.49V3.994c0-1.101-.891-1.994-1.99-1.994s-1.99.893-1.99 1.994V5.49m-1.492 0h6.964v5.485H14.93z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.47 14.964h8.954M7.47 9.978h4.476"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.748 2.987C2.136 3.91-.038 12.96 3.634 17.95l-1.599 3.914c-.032.08.046.161.126.13l4.292-1.512c2.792 1.382 7.346 1.48 10.583.173 1.461-.897 4.291-2.188 4.85-7.094M9.748 2.987q.23-.013.463-.013m-.463.013 1.352-.005 1.588.005"
      />
    </svg>
  );
};
export default MessageLock_01;
