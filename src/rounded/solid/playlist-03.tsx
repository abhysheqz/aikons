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
        fill="currentColor"
        fillRule="evenodd"
        d="M1.125 2.625a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2h-18a1 1 0 0 1-1-1M1.125 9.625a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2h-12a1 1 0 0 1-1-1M1.125 16.625a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.25 14.875c-2.111 0-3.875 1.65-3.875 3.75s1.764 3.75 3.875 3.75 3.875-1.65 3.875-3.75v-5.554c.626.53 1.464.961 2.592 1.142a1 1 0 1 0 .316-1.975c-1.187-.19-1.791-.755-2.17-1.323a5.3 5.3 0 0 1-.475-.926l-.07-.17c-.04-.1-.082-.202-.117-.282a3 3 0 0 0-.255-.482 1 1 0 0 0-1.821.57v5.718a3.97 3.97 0 0 0-1.875-.468"
      />
    </svg>
  );
};
export default Playlist_03;
