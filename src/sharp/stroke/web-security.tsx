import React from "react";
const WebSecurity: React.FC<
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
        d="M3 8h18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 5h.009M11 5h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14 16.5V15a2 2 0 1 0-4 0v1.5m-1.5 0h7V22h-7z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6 19.998H3.01a.01.01 0 0 1-.01-.01V2.01A.01.01 0 0 1 3.01 2h17.98a.01.01 0 0 1 .01.01v17.978a.01.01 0 0 1-.01.01H18"
      />
    </svg>
  );
};
export default WebSecurity;
