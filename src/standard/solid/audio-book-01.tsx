import React from "react";
const AudioBook_01: React.FC<
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
        d="M20.332 17.445a1 1 0 0 1-.277 1.387c-.296.198-.555.619-.555 1.168 0 .55.259.97.555 1.169a1 1 0 0 1-1.11 1.663c-.9-.6-1.445-1.672-1.445-2.832s.546-2.231 1.445-2.831a1 1 0 0 1 1.387.276"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 1a3 3 0 0 0-3 3v16a1 1 0 1 0 2 0 1 1 0 0 1 1-1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm4.386 5.357A.75.75 0 0 0 9.25 7v6a.75.75 0 0 0 1.136.643l5-3a.75.75 0 0 0 0-1.286z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 19a1 1 0 1 0 0 2h14a1 1 0 1 1 0 2H6a3 3 0 1 1 0-6h14a1 1 0 1 1 0 2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AudioBook_01;
