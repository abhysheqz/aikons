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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 3h18M2 10h13M2 17h7M18.25 19c0 1.657-1.4 3-3.125 3S12 20.657 12 19s1.4-3 3.125-3 3.125 1.343 3.125 3m0 0v-9c.417.6.75 3.12 3.75 3.6"
      />
    </svg>
  );
};
export default Playlist_03;
