import React from "react";
const Software: React.FC<
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
        d="M3.25 10a8.75 8.75 0 1 1 15.58 5.47l-1.517-1.217A6.77 6.77 0 0 0 18.806 10c0-1.528-.504-2.94-1.355-4.076l-1.36 1.36-1.376-1.374 1.36-1.36a6.806 6.806 0 0 0-9.389 9.704L5.17 15.468A8.72 8.72 0 0 1 3.25 10"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M10 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 14.25a.75.75 0 0 0-.75.75v7c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75v-7a.75.75 0 0 0-.75-.75zm7 5.25h4v-2h-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Software;
