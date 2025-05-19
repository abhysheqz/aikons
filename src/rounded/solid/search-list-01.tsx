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
        fill="currentColor"
        fillRule="evenodd"
        d="M1.5 9a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1M1.5 14a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1M1.5 4a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2h-16a1 1 0 0 1-1-1M9 13.5a6 6 0 1 1 10.89 3.477l2.317 2.316a1 1 0 0 1-1.414 1.414l-2.316-2.316A6 6 0 0 1 9 13.5m6-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SearchList_01;
