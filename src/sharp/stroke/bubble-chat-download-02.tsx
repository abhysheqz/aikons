import React from "react";
const BubbleChatDownload_02: React.FC<
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
        strokeWidth={1.5}
        d="m15.995 7 3 3 3-3m-3-5v7.47"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.99 12H12m-4.005 0h.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.998 11.499c0 5.251-4.476 9.509-9.998 9.509-1.424 0-2.779-.284-4.005-.794l-3.976 1.785a.01.01 0 0 1-.014-.012l1.001-3.697c-1.842-1.78-3.004-4.112-3.004-6.791 0-5.5 5.06-10.51 12.003-9.323"
      />
    </svg>
  );
};
export default BubbleChatDownload_02;
