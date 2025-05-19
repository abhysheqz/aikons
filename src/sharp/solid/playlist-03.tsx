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
        d="M20 4H2V2h18zM15 11H2V9h13zM9 18H2v-2h7z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.25 18.25c0-2.1 1.764-3.75 3.875-3.75.676 0 1.317.17 1.875.469V9.25a1 1 0 0 1 1.978-.207l.004.018.022.085a5.208 5.208 0 0 0 .594 1.374c.463.74 1.379 1.33 2.402 1.33v2c-1.17 0-2.322-.425-3-.99v5.39c0 2.1-1.764 3.75-3.875 3.75s-3.875-1.65-3.875-3.75"
      />
    </svg>
  );
};
export default Playlist_03;
