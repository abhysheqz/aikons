import React from "react";
const MessageProgramming: React.FC<
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
        d="M22 1.25H2a.75.75 0 0 0-.75.75v16c0 .414.336.75.75.75h3.25V22a.75.75 0 0 0 1.219.586l4.794-3.836H22a.75.75 0 0 0 .75-.75V2a.75.75 0 0 0-.75-.75m-7.031 6.78 1.97 1.97-1.97 1.97 1.06 1.06L19.06 10l-3.03-3.03zm-7-1.06L9.03 8.03 7.06 10l1.97 1.97-1.06 1.06L4.94 10zm4.32-.207-2 6 1.423.474 2-6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MessageProgramming;
