import React from "react";
const Unlink_01: React.FC<
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
        d="M18.31 11.191a4.067 4.067 0 0 0-5.752 0l-.207.207-1.414-1.414.207-.207a6.067 6.067 0 1 1 8.58 8.58l-2.867 2.866a6.067 6.067 0 0 1-8.58-8.58l.587.587-.587-.587.465-.464 1.414 1.414-.464.464a4.067 4.067 0 1 0 5.751 5.752l2.866-2.866a4.067 4.067 0 0 0 0-5.752"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.31 4.191a4.067 4.067 0 0 0-5.752 0L10.69 7.057a4.067 4.067 0 1 0 5.752 5.752l.66.66-.66-.66.207-.207 1.414 1.414-.207.207a6.067 6.067 0 0 1-8.58-8.58l2.867-2.866a6.067 6.067 0 1 1 8.58 8.58l-.465.464-1.414-1.414.464-.464a4.067 4.067 0 0 0 0-5.752M5.016 6.6l-1.5-2 1.6-1.2 1.5 2zM4.5 9.95l-3-1 .632-1.898 3 1zm.916 2.85-2 1.5-1.2-1.6 2-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Unlink_01;
