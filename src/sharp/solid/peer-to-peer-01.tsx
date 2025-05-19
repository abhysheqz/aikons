import React from "react";
const PeerToPeer_01: React.FC<
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
        d="M19.75 4.25v6.5h-1.5l-2.2-1.65.9-1.2 1.3.975V5.75H13v-1.5zM4.25 13.25h1.5l2.2 1.65-.9 1.2-1.3-.975v3.125H11v1.5H4.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.75 20.25v1H20v1.5h-4v-1.5h1.25v-1h-4v-7.5h9.5v7.5zM6.75 8.75v1H8v1.5H4v-1.5h1.25v-1h-4v-7.5h9.5v7.5z"
      />
    </svg>
  );
};
export default PeerToPeer_01;
