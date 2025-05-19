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
        d="M13 5.75h2v-4h-2v2h-2v3H2a.75.75 0 0 0-.75.75v14c0 .414.336.75.75.75h20a.75.75 0 0 0 .75-.75v-14a.75.75 0 0 0-.75-.75h-9zM7.938 14.5l-1.47 1.47 1.061 1.06L9 15.56l1.47 1.47 1.06-1.06-1.47-1.47 1.47-1.47-1.06-1.06-1.47 1.47-1.47-1.47-1.06 1.06zm9.812 2v-4h-1.5v4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Game;
