import React from "react";
const Navigation_06: React.FC<
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
        d="M6.737 10.458C9.01 5.82 10.146 3.5 12 3.5s2.99 2.32 5.263 6.958l1.547 3.16c1.745 3.562 2.618 5.343 1.983 6.2a1.9 1.9 0 0 1-.656.555c-.973.501-2.758-.509-6.327-2.53-.792-.448-1.188-.672-1.621-.712a2 2 0 0 0-.378 0c-.433.04-.829.264-1.62.713-3.57 2.02-5.355 3.03-6.328 2.529a1.9 1.9 0 0 1-.656-.555c-.635-.857.238-2.638 1.983-6.2z"
      />
    </svg>
  );
};
export default Navigation_06;
