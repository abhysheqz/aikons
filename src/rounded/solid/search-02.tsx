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
        fill="currentColor"
        fillRule="evenodd"
        d="M19.806 16.653a2.23 2.23 0 0 0-2.279-.54l-1.707-1.707a8 8 0 1 0-1.414 1.414l1.707 1.707a2.23 2.23 0 0 0 .54 2.278l2.042 2.042a2.23 2.23 0 0 0 3.152-3.152zM3.5 9.5a6 6 0 1 1 12 0 6 6 0 0 1-12 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Search_02;
