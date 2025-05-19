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
        d="M18.809 11.191a4.067 4.067 0 0 0-5.63-.116 1 1 0 0 1-1.357-1.47 6.067 6.067 0 0 1 8.401 8.752l-2.866 2.866a6.067 6.067 0 1 1-8.58-8.58l.464-.464a1 1 0 1 1 1.415 1.414l-.465.464a4.067 4.067 0 1 0 5.752 5.752l2.866-2.866a4.067 4.067 0 0 0 0-5.752"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.809 4.191a4.067 4.067 0 0 0-5.752 0l-2.866 2.866a4.067 4.067 0 0 0 5.63 5.868 1 1 0 0 1 1.357 1.47 6.067 6.067 0 0 1-8.401-8.752l2.866-2.866a6.067 6.067 0 0 1 8.58 8.58l-.464.464a1 1 0 1 1-1.415-1.414l.465-.464a4.067 4.067 0 0 0 0-5.752M3.9 3.2a1 1 0 0 1 1.4.2l1.5 2a1 1 0 1 1-1.6 1.2l-1.5-2a1 1 0 0 1 .2-1.4M1.052 7.684a1 1 0 0 1 1.265-.633l3 1a1 1 0 0 1-.633 1.898l-3-1a1 1 0 0 1-.632-1.265M5.8 11.4a1 1 0 0 1-.2 1.4l-2 1.5a1 1 0 1 1-1.2-1.6l2-1.5a1 1 0 0 1 1.4.2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Unlink_01;
