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
        fill="currentColor"
        fillRule="evenodd"
        d="M4 5.25a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2v-2H6v2H4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 2.25a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3h-2v-2H8v2H6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.25 2A.75.75 0 0 1 7 1.25h10a.75.75 0 0 1 .75.75v3h-1.5V2.75h-8.5V5h-1.5zM3 7.25a.75.75 0 0 0-.75.75v14c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V8a.75.75 0 0 0-.75-.75zm10.23 4.074-.003-.008a.75.75 0 0 0-1.477.184v2.878a2.25 2.25 0 1 0 1.5 2.122v-2.613a2.3 2.3 0 0 0 1.25.363h.5v-1.5h-.5c-.367 0-.669-.235-.927-.648a3.2 3.2 0 0 1-.344-.778"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Playlist_01;
