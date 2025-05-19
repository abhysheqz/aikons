import React from "react";
const Link_01: React.FC<
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
        d="M15.809 11.191a4.067 4.067 0 0 0-5.752 0l-.207.207a1 1 0 0 1-1.414-1.414l.207-.207a6.067 6.067 0 0 1 8.58 8.58l-2.866 2.866a6.067 6.067 0 0 1-8.58-8.58l.586.587-.586-.587.464-.464a1 1 0 1 1 1.415 1.414l-.465.464a4.067 4.067 0 1 0 5.752 5.752l2.866-2.866a4.067 4.067 0 0 0 0-5.752"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.809 4.191a4.067 4.067 0 0 0-5.752 0L8.191 7.057a4.067 4.067 0 1 0 5.752 5.752l.66.66-.66-.66.207-.207a1 1 0 0 1 1.414 1.414l-.207.207a6.067 6.067 0 0 1-8.58-8.58l2.866-2.866a6.067 6.067 0 0 1 8.58 8.58l-.464.464a1 1 0 1 1-1.415-1.414l.465-.464a4.067 4.067 0 0 0 0-5.752"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Link_01;
