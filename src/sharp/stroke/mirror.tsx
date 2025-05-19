import React from "react";
const Mirror: React.FC<
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
        strokeWidth={1.5}
        d="M7 17V7a5 5 0 0 1 10 0v10z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9.5 7.5 2-2m-1.5 5 4-4M20 8v14M4 8v14M4 20h16M4 12h3m10 0h3"
      />
    </svg>
  );
};
export default Mirror;
