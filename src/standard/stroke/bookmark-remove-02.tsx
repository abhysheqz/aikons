import React from "react";
const BookmarkRemove_02: React.FC<
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
        d="m20.5 2.5-6 6m0-6 6 6M11 2.5H5.5a2 2 0 0 0-2 2v17l7.5-4 7.5 4V12"
      />
    </svg>
  );
};
export default BookmarkRemove_02;
