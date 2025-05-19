import React from "react";
const SendToMobile: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.5 19h.01"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 12.034h-7M17 9s2.037 1.647 2.82 2.553c.127.146.186.31.18.472a.7.7 0 0 1-.18.422C19.038 13.353 17 15 17 15"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 6c-.015-1.707-.11-2.647-.73-3.268C15.538 2 14.36 2 12.002 2H9c-2.357 0-3.536 0-4.269.732C4 3.464 4 4.643 4 7v10c0 2.357 0 3.535.732 4.268C5.465 22 6.644 22 9.001 22h3c2.358 0 3.537 0 4.27-.732.62-.62.714-1.562.729-3.268"
      />
    </svg>
  );
};
export default SendToMobile;
