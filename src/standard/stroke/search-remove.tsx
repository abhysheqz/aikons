import React from "react";
const SearchRemove: React.FC<
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
        d="m17 17 4 4M19 11a8 8 0 1 0-16 0 8 8 0 0 0 16 0M8 8l3 3m0 0 3 3m-3-3 3-3m-3 3-3 3"
      />
    </svg>
  );
};
export default SearchRemove;
