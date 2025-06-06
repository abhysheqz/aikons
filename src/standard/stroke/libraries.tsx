import React from "react";
const Libraries: React.FC<
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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M6.5 4h-3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1ZM11.5 7h-3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1ZM16.774 7.072 13.63 8.335c-.498.2-.751.757-.575 1.266l3.37 9.723c.18.523.749.8 1.271.621l3.125-1.073c.523-.18.802-.75.625-1.276l-3.35-9.912a1 1 0 0 0-1.323-.612Z"
      />
    </svg>
  );
};
export default Libraries;
