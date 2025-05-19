import React from "react";
const Investigation: React.FC<
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
        d="M10 16.5a5.5 5.5 0 1 1 10.028 3.123l1.677 1.668a1 1 0 0 1-1.41 1.418l-1.683-1.673A5.5 5.5 0 0 1 10 16.5m5.5-3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 4A2.75 2.75 0 0 1 5 1.25h12A2.75 2.75 0 0 1 19.75 4v6.937a7 7 0 0 0-8.88 10.813H5A2.75 2.75 0 0 1 2.25 19zM7.5 5.25a.75.75 0 0 0 0 1.5H14a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h1.273a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Investigation;
