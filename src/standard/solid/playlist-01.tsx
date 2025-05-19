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
        d="M7 6a1 1 0 0 0-1 1v1H4V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v1h-2V7a1 1 0 0 0-1-1z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 3a1 1 0 0 0-1 1v1H6V4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v1h-2V4a1 1 0 0 0-1-1zM5 7.25A2.75 2.75 0 0 0 2.25 10v10A2.75 2.75 0 0 0 5 22.75h14A2.75 2.75 0 0 0 21.75 20V10A2.75 2.75 0 0 0 19 7.25zm7.378 3.257a1 1 0 0 1 1.09.745l.002.005.011.038q.016.058.057.166a3 3 0 0 0 .248.509c.24.383.475.53.714.53a1 1 0 0 1 0 2 2.5 2.5 0 0 1-1-.2v2.2a2.5 2.5 0 1 1-2-2.45V11.5a1 1 0 0 1 .878-.993M11 16a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Playlist_01;
