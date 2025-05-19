import React from "react";
const SearchList_01: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M2.5 9h4M2.5 14h4M2.5 4h16M18.536 17.036 21.5 20M20 13.5a5 5 0 1 0-10 0 5 5 0 0 0 10 0Z"
      />
    </svg>
  );
};
export default SearchList_01;
