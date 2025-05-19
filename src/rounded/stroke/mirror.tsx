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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 15V7a5 5 0 0 1 10 0v8c0 1.655-.345 2-2 2H9c-1.655 0-2-.345-2-2M10 6l1-1M11 8.5l2-2M20 8v14M4 8v14M4 20h16M4 12h3m10 0h3"
      />
    </svg>
  );
};
export default Mirror;
