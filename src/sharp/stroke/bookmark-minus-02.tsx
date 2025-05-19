import React from "react";
const BookmarkMinus_02: React.FC<
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
        d="M13 6h8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19 11v11l-8-4-8 4V2.05A.05.05 0 0 1 3.05 2H11"
      />
    </svg>
  );
};
export default BookmarkMinus_02;
