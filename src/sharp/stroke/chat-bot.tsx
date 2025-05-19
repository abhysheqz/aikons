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
        d="M12 5v3M19 8H5v12h4v2l3-2h7zM19 11.5h3v5h-3M5 16.5H2v-5h3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9 11v2m6-2v2m-5.5 3s.833 1 2.5 1c1.666 0 2.5-1 2.5-1"
      />
    </svg>
  );
};
export default ChatBot;
