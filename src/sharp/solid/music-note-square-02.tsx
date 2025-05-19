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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zM17 7a1 1 0 0 0-1.447-.894l-6 3A1 1 0 0 0 9 10v3.05a2.5 2.5 0 1 0 2 2.45v-4.882l4-2v2.896a2.25 2.25 0 1 0 1.995 2.086q.005-.05.005-.1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MusicNoteSquare_02;
