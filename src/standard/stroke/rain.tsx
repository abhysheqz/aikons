import React from "react";
const Rain: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 7.5a3.5 3.5 0 1 1-7 0c0-1.918 2.06-3.542 3.02-4.194a.85.85 0 0 1 .96 0C18.94 3.958 21 5.582 21 7.5M10 7.5a3.5 3.5 0 1 1-7 0c0-1.918 2.06-3.542 3.02-4.194a.85.85 0 0 1 .96 0C7.94 3.958 10 5.582 10 7.5M15.5 17.5a3.5 3.5 0 1 1-7 0c0-1.918 2.06-3.542 3.02-4.194.293-.2.668-.2.96 0 .96.652 3.02 2.276 3.02 4.194"
      />
    </svg>
  );
};
export default Rain;
