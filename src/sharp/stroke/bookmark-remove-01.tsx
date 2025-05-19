import React from "react";
const BookmarkRemove_01: React.FC<
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
        d="M3.512 7h7.495M21 2l-6.995 7M21 9l-6.995-7"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3.012 2.05V22l7.995-4L19 22V12M3.012 2.05 11.007 2m-7.995.05c0-.028-.027 0 0 0Z"
      />
    </svg>
  );
};
export default BookmarkRemove_01;
