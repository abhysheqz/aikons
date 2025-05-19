import React from "react";
const School_01: React.FC<
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
        d="m17.165 13.494 4.085 2.042v7.214h-1.5v-6.286l-3.256-1.629zM7.506 14.835 4.25 16.463v6.287h-1.5v-7.214l4.085-2.042z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M23 22.75H1v-1.5h22z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v2.982a.75.75 0 0 1-.75.75h-3.25V7.75h-1.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.25 22V10.64L12 6.04l5.75 4.6V22h-3v-5a.75.75 0 0 0-.75-.75h-4a.75.75 0 0 0-.75.75v5zm4.5 0h2.5v-4.25h-2.5zM11 12h2.009v2H11z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default School_01;
