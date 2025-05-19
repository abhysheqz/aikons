import React from "react";
const Playlist_02: React.FC<
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
        d="M20 7h-2V5h2a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-2h2v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 1.25A2.75 2.75 0 0 0 1.25 4v12A2.75 2.75 0 0 0 4 18.75h12A2.75 2.75 0 0 0 18.75 16V4A2.75 2.75 0 0 0 16 1.25zm7.895 4.304v-.001A1.001 1.001 0 0 0 10 6v3.17A3 3 0 1 0 12 12V8.962c.188.144.398.274.629.367a1 1 0 1 0 .742-1.857c-.058-.024-.19-.107-.385-.309a5.3 5.3 0 0 1-.535-.676 9 9 0 0 1-.55-.921zM9 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Playlist_02;
