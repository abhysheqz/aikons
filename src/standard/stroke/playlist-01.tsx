import React from "react";
const Playlist_01: React.FC<
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
        d="M5 22h14a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2ZM19 8V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1M17 5V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 0v-5s.5 2 2 2"
      />
    </svg>
  );
};
export default Playlist_01;
