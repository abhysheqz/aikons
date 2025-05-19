import React from "react";
const BookBookmark_01: React.FC<
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
        d="M8 4v6l2-1.5 2 1.5V4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 22H6a2 2 0 0 1-2-2m0 0a2 2 0 0 1 2-2h14V2s-1 2-4 2H6a2 2 0 0 0-2 2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M19.5 18c-.598.4-1 1.145-1 2s.402 1.6 1 2"
      />
    </svg>
  );
};
export default BookBookmark_01;
