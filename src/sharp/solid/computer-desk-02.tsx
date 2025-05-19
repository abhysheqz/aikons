import React from "react";
const ComputerDesk_02: React.FC<
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
        d="M16.25 6.25h4.5v6.5h-4.5zm1.5 1.5v3.5h1.5v-3.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.25 12.25H20V18h-8a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 11.25h20v2h-1v9h-2v-9H5v9H3v-9H2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.251 2.5a.75.75 0 0 1 .75-.75H13a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75z"
      />
      <path fill="currentColor" d="M9.5 12.25v-3h-3v3z" />
    </svg>
  );
};
export default ComputerDesk_02;
