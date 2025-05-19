import React from "react";
const Mailbox_01: React.FC<
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
        d="M1.75 10.5a5.75 5.75 0 1 1 11.5 0v11.75h-2v-3H2.5a.75.75 0 0 1-.75-.75zM6 8.75v1.5h3v-1.5zM16.5 2.75a1 1 0 0 1 1-1H21v2h-2.5v6h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.5 10.5a6.99 6.99 0 0 0-3.007-5.75H16.5a5.75 5.75 0 0 1 5.75 5.75v8a.75.75 0 0 1-.75.75h-7z"
      />
    </svg>
  );
};
export default Mailbox_01;
