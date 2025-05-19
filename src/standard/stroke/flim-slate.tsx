import React from "react";
const FlimSlate: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.5 11H4v9a2 2 0 0 0 2 2h13.5a2 2 0 0 0 2-2zM3.998 11 20.5 7l-.94-3.132a2 2 0 0 0-2.441-1.355l-12.58 3.43a2 2 0 0 0-1.371 2.562z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m8 10 1-5.5M14 8.5 15 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M8 18h4"
      />
    </svg>
  );
};
export default FlimSlate;
