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
        strokeWidth={1.5}
        d="M17.5 17.5 22 22M20 11a9 9 0 0 1-16.65 4.745M2 11A9 9 0 0 1 18.62 6.207M2.936 20v-5H7.5M19.065 2v5H14.5"
      />
    </svg>
  );
};
export default SearchReplace;
