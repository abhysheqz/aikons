import React from "react";
const PeerToPeer_03: React.FC<
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
        d="M9.25 5.25h2v1.5h-2zM12.75 5.25h2v1.5h-2zM4.25 13.75v5h2.5v1.5h-4v-6.5zm17 0v6.5h-4v-1.5h2.5v-5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.25 4.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M1.25 11.5c0-2.175 2.015-3.75 4.25-3.75s4.25 1.575 4.25 3.75v.75h-8.5zM16.25 4.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M14.25 11.5c0-2.175 2.015-3.75 4.25-3.75s4.25 1.575 4.25 3.75v.75h-8.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.25 16.25v-.75a2.25 2.25 0 0 0-4.5 0v.75h-1.5v5.5h7.5v-5.5zm-3-.75a.75.75 0 0 1 1.5 0v.75h-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PeerToPeer_03;
