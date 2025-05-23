import React from "react";
const BubbleChatUser: React.FC<
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
        d="M22.003 11v.75a.75.75 0 0 0 .75-.75zM15 11h-.75c0 .414.336.75.75.75zm7.003-.75H15v1.5h7.003zM15.75 11a2.75 2.75 0 0 1 2.752-2.75v-1.5A4.25 4.25 0 0 0 14.25 11zm2.752-2.75A2.75 2.75 0 0 1 21.253 11h1.5a4.25 4.25 0 0 0-4.251-4.25zm1-4.5a1 1 0 0 1-1.001 1v1.5a2.5 2.5 0 0 0 2.5-2.5zm-1.001 1a1 1 0 0 1-1-1H16a2.5 2.5 0 0 0 2.5 2.5zm-1-1a1 1 0 0 1 1-1v-1.5a2.5 2.5 0 0 0-2.5 2.5zm1-1a1 1 0 0 1 1 1h1.5a2.5 2.5 0 0 0-2.5-2.5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.986 12.015h.009m-4 0h.008"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 2C6.477 2 2 6.477 2 12c0 1.575.402 2.94 1.064 4.224.26.503.343 1.085.18 1.628l-.71 2.369a1 1 0 0 0 1.245 1.245l2.369-.71c.542-.164 1.124-.08 1.627.18C9.06 21.596 10.425 22 12 22c4.838 0 9.074-3.436 10-8"
      />
    </svg>
  );
};
export default BubbleChatUser;
