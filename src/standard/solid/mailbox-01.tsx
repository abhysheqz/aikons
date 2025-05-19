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
        d="M19.75 3a1 1 0 0 0-1 1v4.5a1 1 0 1 1-2 0V4a3 3 0 0 1 3-3h1a1 1 0 1 1 0 2zM8.275 4.25H7.75A5.75 5.75 0 0 0 2 10v6a2.75 2.75 0 0 0 2.75 2.75h8.524V9.195a4 4 0 0 0-4-4 1 1 0 0 1-.999-.945M5.75 9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.274 18.75h4.476A2.75 2.75 0 0 0 22.5 16v-6a5.75 5.75 0 0 0-5.75-5.75h-4.078a6 6 0 0 1 2.602 4.945z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.75 10.25c0-2.294-1.675-4.12-3.9-4a1 1 0 1 1-.108-1.997c3.571-.191 6.008 2.767 6.008 5.996v12a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Mailbox_01;
