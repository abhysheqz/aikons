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
        fill="currentColor"
        fillRule="evenodd"
        d="M17.75 3.25a2.5 2.5 0 0 0-2.328 3.414l3.242-3.242a2.5 2.5 0 0 0-.914-.172m2.328 1.586-3.242 3.242a2.5 2.5 0 0 0 3.241-3.241m-6.828.914a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.781 1.25a5.99 5.99 0 0 0-2.01 5H1.75V2a.75.75 0 0 1 .75-.75zM12.091 7.75a6.003 6.003 0 0 0 7.159 3.811V22.75l-8.75-4.375-8.75 4.375v-15z"
      />
    </svg>
  );
};
export default BookmarkBlock_01;
