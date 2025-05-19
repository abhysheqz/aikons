import React from "react";
const CookBook: React.FC<
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
        strokeWidth={1.5}
        d="M20 22a2.5 2.5 0 0 1 0-5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M20 17H6.5a2.5 2.5 0 0 0 0 5H20"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 17V2H6a2 2 0 0 0-2 2v15.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 7.5q-.002-.35-.112-.662m0 0a2 2 0 0 0-3.776 0A2 2 0 1 0 9 10.5v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2a2 2 0 1 0-1.112-3.662"
      />
    </svg>
  );
};
export default CookBook;
