import React from "react";
const BookmarkMinus_01: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 5.5h-7M3 7.5h7.5M10.5 2.5H5a2 2 0 0 0-2 2v17l7.5-4 7.5 4V10"
      />
    </svg>
  );
};
export default BookmarkMinus_01;
