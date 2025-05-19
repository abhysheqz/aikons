import React from "react";
const BbqGrill: React.FC<
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
        d="m5.31 21.41 3-7 1.38.59-3 7zM18.69 21.41l-3-7-1.38.59 3 7zM11.25 22v-7h1.5v7zM11.25 6V2h1.5v4zM7.25 6V2h1.5v4zM15.25 6V2h1.5v4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.5 19.75h-9v-1.5h9z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M19.75 7.25V8a7.75 7.75 0 1 1-15.5 0v-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 9.25h2v1.5H3zm18 1.5h-2v-1.5h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BbqGrill;
