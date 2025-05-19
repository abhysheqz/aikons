import React from "react";
const BookmarkCheck_02: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="m9 10 1.75 2L16 7" />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4 2.01A.01.01 0 0 1 4.01 2h15.98a.01.01 0 0 1 .01.01V22l-8-4-8 4z"
      />
    </svg>
  );
};
export default BookmarkCheck_02;
