import React from "react";
const PeerToPeer_02: React.FC<
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
        d="M3.25 4.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M1.25 11.5c0-2.175 2.015-3.75 4.25-3.75s4.25 1.575 4.25 3.75v.75h-8.5zM14.25 21c0-2.175 2.015-3.75 4.25-3.75s4.25 1.575 4.25 3.75v.75h-8.5zM20.75 14a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.25 3.25v6.5h-1.5l-2.2-1.65.9-1.2 1.3.975V4.75H11.5v-1.5zM4.25 14.25h1.5l2.2 1.65-.9 1.2-1.3-.975v3.125H12v1.5H4.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PeerToPeer_02;
