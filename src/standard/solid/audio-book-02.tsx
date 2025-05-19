import React from "react";
const AudioBook_02: React.FC<
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
        d="M6 19a1 1 0 1 0 0 2h14a1 1 0 1 1 0 2H6a3 3 0 1 1 0-6h14a1 1 0 1 1 0 2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.332 17.445a1 1 0 0 1-.277 1.387c-.296.198-.555.618-.555 1.168s.259.97.555 1.168a1 1 0 0 1-1.11 1.664c-.9-.6-1.445-1.672-1.445-2.832s.546-2.231 1.445-2.832a1 1 0 0 1 1.387.277"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 1a3 3 0 0 0-3 3v16a1 1 0 1 0 2 0 1 1 0 0 1 1-1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm6 5a1 1 0 0 1 1-1h.5a1 1 0 0 1 .97.756l.001.001.002.01.014.05a6.426 6.426 0 0 0 .303.84c.107.242.23.472.363.654.138.19.243.27.294.295a1 1 0 0 1-.894 1.788A2.5 2.5 0 0 1 14 9.012V12a3 3 0 1 1-2-2.829zm0 6a1 1 0 1 1-2-.001A1 1 0 0 1 12 12"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AudioBook_02;
