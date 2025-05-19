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
        fill="currentColor"
        fillRule="evenodd"
        d="M22.25 6h-8V4h8z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.97 1.47a.75.75 0 0 1 .53-.22h16a.75.75 0 0 1 .75.75v.5h-6.5v3.75h-11V2a.75.75 0 0 1 .22-.53M1.75 7.75h17.5v15l-8.75-4.375-8.75 4.375z"
      />
    </svg>
  );
};
export default BookmarkMinus_01;
