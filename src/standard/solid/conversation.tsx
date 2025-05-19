import React from "react";
const Conversation: React.FC<
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
        d="M6.25 4c0-.966.784-1.75 1.75-1.75h8c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 16 8.75h-2.773l-2.811 1.874A.75.75 0 0 1 9.25 10V8.75H8A1.75 1.75 0 0 1 6.25 7zM3.25 13a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m-2 8a4.75 4.75 0 1 1 9.5 0 .75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75M15.25 13a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m-2 8a4.75 4.75 0 1 1 9.5 0 .75.75 0 0 1-.75.75h-8a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Conversation;
