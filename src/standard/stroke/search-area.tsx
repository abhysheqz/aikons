import React from "react";
const SearchArea: React.FC<
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
        d="M18.502 18.5 21 21m-1-6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0M17.5 3H19a2 2 0 0 1 2 2v1.5m-18 0V5a2 2 0 0 1 2-2h1.5m0 18H5a2 2 0 0 1-2-2v-1.5M10 3h4M3 10v4"
      />
    </svg>
  );
};
export default SearchArea;
