import React from "react";
const ComputerDesk_01: React.FC<
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
        d="M6.251 2.5a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-.75.75H7a.75.75 0 0 1-.75-.75z"
      />
      <path fill="currentColor" d="M13.5 12.25v-3h-3v3z" />
    </svg>
  );
};
export default ComputerDesk_01;
