import React from "react";
const ShuffleSquare: React.FC<
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
        d="M5.5 21.5h13a3 3 0 0 0 3-3v-13a3 3 0 0 0-3-3h-13a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16 17.5 1.5-2h-2.52a1 1 0 0 1-.78-.375l-5.4-6.75A1 1 0 0 0 8.02 8H6.5M16 6.5l1.5 2h-2.586a1 1 0 0 0-.707.293L13.5 9.5m-7 6.5h1.586a1 1 0 0 0 .707-.293L10 14.5"
      />
    </svg>
  );
};
export default ShuffleSquare;
