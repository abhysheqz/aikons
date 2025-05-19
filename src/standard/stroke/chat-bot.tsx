import React from "react";
const ChatBot: React.FC<
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
        d="M13.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 5v3M17 8H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2v2l3-2h5a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 11.5h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2M5 16.5H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h2M9 11v2m6-2v2m-5 3s.333.5 2 .5c1.666 0 2-.5 2-.5"
      />
    </svg>
  );
};
export default ChatBot;
