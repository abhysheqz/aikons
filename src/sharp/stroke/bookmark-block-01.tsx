import React from "react";
const BookmarkBlock_01: React.FC<
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
        d="m14.667 7.833 4.666-4.666M20.5 5.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM4 7h6.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19.5 12v10l-8-4-8 4V2.05A.05.05 0 0 1 3.55 2h6.95"
      />
    </svg>
  );
};
export default BookmarkBlock_01;
