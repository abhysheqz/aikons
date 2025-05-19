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
        fill="currentColor"
        fillRule="evenodd"
        d="m18.043 4.043 2.793-2.793 1.414 1.414-2.793 2.793L22.25 8.25l-1.414 1.414-2.793-2.793-2.793 2.793-1.414-1.414 2.792-2.793-2.792-2.792L15.25 1.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.183 1.25H2.5a.75.75 0 0 0-.75.75v20.75l8.75-4.375 8.75 4.375V10.147l-1.154-1.154-2.793 2.792-3.536-3.535 2.793-2.793-2.793-2.792z"
      />
    </svg>
  );
};
export default BookmarkRemove_02;
