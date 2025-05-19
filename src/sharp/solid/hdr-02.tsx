import React from "react";
const Hdr_02: React.FC<
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
        d="M17.25 13.25h2.25a2.25 2.25 0 0 1 1.227 4.136l1.023 2.364h-1.548l-.837-2h-.615v2h-1.5zm1.5 3h.75a.75.75 0 0 0 0-1.5h-.75zM11.75 13.25h1.75A2.75 2.75 0 0 1 16.25 16v1a2.75 2.75 0 0 1-2.75 2.75h-1.75zm1.5 1.5v3.5h.25c.69 0 1.25-.56 1.25-1.25v-1c0-.69-.56-1.25-1.25-1.25zM7.75 13.25v2.5h1.5v-2.5h1.5v6.5h-1.5v-2.5h-1.5v2.5h-1.5v-6.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m2.251 1.25-.001 21.5h17.5V21H5v-9h14.75V8.63l-7.39-7.38zm9.312 1.955 6.236 6.255h-6.236z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hdr_02;
