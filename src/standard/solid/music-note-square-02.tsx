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
        fill="currentColor"
        fillRule="evenodd"
        d="M5.5 1.75A3.75 3.75 0 0 0 1.75 5.5v13a3.75 3.75 0 0 0 3.75 3.75h13a3.75 3.75 0 0 0 3.75-3.75v-13a3.75 3.75 0 0 0-3.75-3.75zM17 7a1 1 0 0 0-1.242-.97l-6 1.5A1 1 0 0 0 9 8.5v4.55a2.5 2.5 0 1 0 2 2.45V9.28l4-1v2.77a2.5 2.5 0 1 0 2 2.45z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MusicNoteSquare_02;
