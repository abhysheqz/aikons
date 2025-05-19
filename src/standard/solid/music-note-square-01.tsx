import React from "react";
const MusicNoteSquare_01: React.FC<
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
        d="M5.5 1.75A3.75 3.75 0 0 0 1.75 5.5v13a3.75 3.75 0 0 0 3.75 3.75h13a3.75 3.75 0 0 0 3.75-3.75v-13a3.75 3.75 0 0 0-3.75-3.75zm7.27 4.277c.451-.107.917.112 1.124.526l.002.003.01.019.043.082a9.924 9.924 0 0 0 .789 1.243c.255.34.525.643.785.85.274.22.43.25.477.25a1 1 0 1 1 0 2c-.703 0-1.297-.344-1.726-.688a5 5 0 0 1-.274-.236V14.5a3.5 3.5 0 1 1-2-3.163V7a1 1 0 0 1 .77-.973"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MusicNoteSquare_01;
