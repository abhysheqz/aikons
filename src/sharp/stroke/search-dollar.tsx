import React from "react";
const SearchDollar: React.FC<
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
        d="M17.5 17.5 22 22"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 11a9 9 0 1 0-18 0 9 9 0 0 0 18 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 7.5c-1.266 0-2.292.813-2.292 1.815s.625 1.556 2.292 1.556 2.5.518 2.5 1.814S12.38 14.5 11 14.5m0-7c1.266 0 2.292.813 2.292 1.815M11 7.5v-2m0 9c-1.38 0-2.5-.812-2.5-1.815M11 14.5v2"
      />
    </svg>
  );
};
export default SearchDollar;
