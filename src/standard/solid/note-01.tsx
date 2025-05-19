import React from "react";
const Note_01: React.FC<
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
        d="M7 1a1 1 0 0 1 1 1v2.5a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.5 2.75A2.75 2.75 0 0 0 2.75 5.5V20a2.75 2.75 0 0 0 2.75 2.75h13A2.75 2.75 0 0 0 21.25 20V5.5a2.75 2.75 0 0 0-2.75-2.75zm3 7.25a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2zm0 5a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Note_01;
