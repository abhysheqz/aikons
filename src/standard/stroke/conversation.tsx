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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 7V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3l-3 2V8H8a1 1 0 0 1-1-1ZM10 21H2a4 4 0 0 1 8 0ZM8 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM22 21h-8a4 4 0 0 1 8 0ZM20 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
    </svg>
  );
};
export default Conversation;
