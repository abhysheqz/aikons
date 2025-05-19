import React from "react";
const MusicNoteSquare_02: React.FC<
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
        d="M3 21h18V3H3z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 0V10l6-3v6.5m0 .25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
      />
    </svg>
  );
};
export default MusicNoteSquare_02;
