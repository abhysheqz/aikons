import React from "react";
const Game: React.FC<
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
        d="M1.25 11.125A4.75 4.75 0 0 1 6 6.375h12a4.75 4.75 0 0 1 4.75 4.75v7a4.75 4.75 0 0 1-4.75 4.75H6a4.75 4.75 0 0 1-4.75-4.75zm9.28 1.47a.75.75 0 0 1 0 1.06l-.97.97.97.97a.75.75 0 1 1-1.06 1.06l-.97-.97-.97.97a.75.75 0 0 1-1.06-1.06l.97-.97-.97-.97a.75.75 0 1 1 1.06-1.06l.97.97.97-.97a.75.75 0 0 1 1.06 0m7.47 1.03a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 1.125a1 1 0 0 1 1 1v.97a2.32 2.32 0 0 1-1.758 2.25.32.32 0 0 0-.242.31v1.47a1 1 0 1 1-2 0v-1.47a2.32 2.32 0 0 1 1.758-2.25.32.32 0 0 0 .242-.31v-.97a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Game;
