import React from "react";
const SquareUnlock_02: React.FC<
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
        d="M6 8.25A2.75 2.75 0 0 0 3.25 11v9A2.75 2.75 0 0 0 6 22.75h12A2.75 2.75 0 0 0 20.75 20v-9A2.75 2.75 0 0 0 18 8.25zm7 6.25a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.5 6.5A5.5 5.5 0 0 1 12 1c2.461 0 4.212 1.598 4.943 3.667a1 1 0 1 1-1.886.666C14.553 3.906 13.457 3 12 3a3.5 3.5 0 0 0-3.5 3.5V9a1 1 0 0 1-2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareUnlock_02;
