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
        d="M20.806 7.194h-2.917V5.25h3.889c.537 0 .972.435.972.972v15.556a.97.97 0 0 1-.972.972H6.222a.97.97 0 0 1-.972-.972v-3.89h1.944v2.918h13.612z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 2A.75.75 0 0 1 2 1.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75zm9.562 3.274a.75.75 0 0 1 .844.362c.064.115.111.25.142.34l.067.203v.002l.042.127c.078.235.166.477.28.697.234.453.48.645.813.645h.5v1.5H13c-.511 0-.922-.155-1.25-.383V12a2.75 2.75 0 1 1-1.5-2.45V6a.75.75 0 0 1 .562-.726"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Playlist_02;
