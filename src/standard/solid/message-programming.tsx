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
        d="M5 1.25A3.75 3.75 0 0 0 1.25 5v10A3.75 3.75 0 0 0 5 18.75h3a.25.25 0 0 1 .25.25v3a.75.75 0 0 0 1.166.624l5.496-3.664a1.25 1.25 0 0 1 .694-.21H19A3.75 3.75 0 0 0 22.75 15V5A3.75 3.75 0 0 0 19 1.25zm8.949 6.067a1 1 0 0 0-1.898-.633l-2 6a1 1 0 0 0 1.898.633zm-5.242 1.39a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L7.414 10zm8-1.414a1 1 0 1 0-1.414 1.414L16.586 10l-1.293 1.293a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MessageProgramming;
