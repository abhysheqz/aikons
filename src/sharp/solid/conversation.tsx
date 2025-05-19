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
        d="M6.25 2A.75.75 0 0 1 7 1.25h10a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-.75.75h-3.773l-2.811 1.874A.75.75 0 0 1 9.25 11V9.75H7A.75.75 0 0 1 6.25 9zM1.25 22a4.75 4.75 0 1 1 9.5 0 .75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75M13.25 22a4.75 4.75 0 1 1 9.5 0 .75.75 0 0 1-.75.75h-8a.75.75 0 0 1-.75-.75M3.25 13.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M15.25 13.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
    </svg>
  );
};
export default Conversation;
