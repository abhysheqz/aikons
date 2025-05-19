import React from "react";
const Bookmark_03: React.FC<
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
        d="M21 22V2H3v20z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M8 2v10l4-3 4 3V2" />
    </svg>
  );
};
export default Bookmark_03;
