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
      <path fill="currentColor" d="M13.75 6.25v-2h8v2z" />
      <path
        fill="currentColor"
        d="M3 1.188a.75.75 0 0 0-.75.75v20.75L11 18.313l8.75 4.375V7.75h-7.5v-5h7.5v-.812a.75.75 0 0 0-.75-.75z"
      />
    </svg>
  );
};
export default BookmarkMinus_02;
