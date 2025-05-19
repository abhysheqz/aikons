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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 7H6a4 4 0 0 0-4 4v7a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-7a4 4 0 0 0-4-4Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m10 16-1.5-1.5m0 0L7 13m1.5 1.5L7 16m1.5-1.5L10 13"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 15.5v-2M12 7V5.53a1.32 1.32 0 0 1 1-1.28v0a1.32 1.32 0 0 0 1-1.28V2"
      />
    </svg>
  );
};
export default Game;
