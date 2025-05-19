import React from "react";
const SearchReplace: React.FC<
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
        d="M17.5 17.5 22 22"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 11a9 9 0 0 1-16.686 4.685M2 11a9 9 0 0 1 16.66-4.727M3 20v-5h4.5M19 2v5h-4.5"
      />
    </svg>
  );
};
export default SearchReplace;
