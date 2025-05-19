import React from "react";
const PlaySquare: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm6.917 6.55c-1.166-.718-2.667.12-2.667 1.49v4.42c0 1.37 1.501 2.209 2.667 1.491l3.592-2.21a1.75 1.75 0 0 0 0-2.981z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PlaySquare;
