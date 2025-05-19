import React from "react";
const AppleFinder: React.FC<
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
        d="m12.332 21.36.214.39H3a.75.75 0 0 1-.75-.75V3A.75.75 0 0 1 3 2.25h9.562l-.201.357c-.498.754-1.264 2.573-1.899 4.517C9.817 9.1 9.25 11.374 9.25 13v.75h2.26a12.4 12.4 0 0 0-.28 3.459c-1.22-.13-2.48-.573-3.859-1.36l-.744 1.302c1.636.935 3.21 1.476 4.803 1.58a10.5 10.5 0 0 0 .902 2.63m.402-4.148c1.231-.125 2.503-.569 3.893-1.363l.744 1.302c-1.503.86-2.953 1.385-4.414 1.546a9 9 0 0 0 .698 1.956l.6 1.097H21a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75h-6.715l-.632 1.119-.031.05c-.37.548-1.093 2.209-1.734 4.17-.53 1.626-.966 3.34-1.097 4.661h2.791l-.38 1.013v.003l-.01.026-.038.114c-.033.104-.079.261-.13.464a10.8 10.8 0 0 0-.29 3.342M6.25 10V8h1.5v2zm10-2v2h1.5V8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AppleFinder;
