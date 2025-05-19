import React from "react";
const PlayListFavourite_01: React.FC<
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
        d="M3 7h18M17 2.5 14 7M10 2.5 7 7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 21.5h-6a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.086 13.831c-1.796-.951-3.086.451-3.086.451s-1.29-1.402-3.086-.451C11.738 14.983 11.582 19.496 17 21.5c5.418-2.004 5.262-6.517 3.086-7.669"
      />
    </svg>
  );
};
export default PlayListFavourite_01;
