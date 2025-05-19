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
        d="M22 8H2v14h20z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 8V5h2V2M11 17l-2-2m0 0-2-2m2 2-2 2m2-2 2-2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 17v-4"
      />
    </svg>
  );
};
export default Game;
