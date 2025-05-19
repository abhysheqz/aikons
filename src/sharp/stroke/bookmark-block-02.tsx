import React from "react";
const BookmarkBlock_02: React.FC<
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
        d="m13.7 3.2 5.6 5.6M20.5 6a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19.5 13v9l-8-4-8 4V2.05A.05.05 0 0 1 3.55 2h6.95"
      />
    </svg>
  );
};
export default BookmarkBlock_02;
