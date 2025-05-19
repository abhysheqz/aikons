import React from "react";
const Playlist_03: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 3h18M2 10h13M2 17h7M18.25 18c0 1.657-1.4 3-3.125 3S12 19.657 12 18s1.4-3 3.125-3 3.125 1.343 3.125 3Zm0 0V9S19 12.6 22 12.6"
      />
    </svg>
  );
};
export default Playlist_03;
