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
        d="M21.5 11H4v11h17.5zM3.998 11 20.5 7 19 2 2.5 6.5z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m8 10 1-5.5M14 8.5 15 3M8 18h4"
      />
    </svg>
  );
};
export default FlimSlate;
