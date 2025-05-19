import React from "react";
const Search_02: React.FC<
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
        d="m15 15 1.5 1.5M16.933 19.025a1.48 1.48 0 1 1 2.092-2.092l2.042 2.042a1.48 1.48 0 1 1-2.092 2.092zM16.5 9.5a7 7 0 1 0-14 0 7 7 0 0 0 14 0"
      />
    </svg>
  );
};
export default Search_02;
