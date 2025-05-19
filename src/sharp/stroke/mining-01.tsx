import React from "react";
const Mining_01: React.FC<
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
        d="M8 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.874 8q.125-.481.126-1a4 4 0 1 0-7.874 1M14.751 3.008q.124-.008.25-.008a4 4 0 0 1 3.873 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M14 19h-4m8 0 3-.007L22 8H2l1 11h3"
      />
    </svg>
  );
};
export default Mining_01;
