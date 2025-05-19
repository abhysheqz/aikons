import React from "react";
const Share_07: React.FC<
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
        d="M17.5 1.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8M5.5 7.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8M18.5 14.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.372 5.5a7.15 7.15 0 0 0-6.258 3.65l-1.748-.973A9.15 9.15 0 0 1 13.372 3.5q.662 0 1.301.09l-.279 1.981a7 7 0 0 0-1.022-.071m7.127 7a6.9 6.9 0 0 0-1.562-4.373l1.55-1.265A8.9 8.9 0 0 1 22.5 12.5a8.87 8.87 0 0 1-1.098 4.283l-1.753-.963c.543-.988.851-2.117.851-3.32M6.467 14.238c.784 3.016 3.572 5.262 6.905 5.262.771 0 1.512-.12 2.205-.341l.608 1.905a9.2 9.2 0 0 1-2.813.436c-4.247 0-7.828-2.864-8.84-6.759z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Share_07;
