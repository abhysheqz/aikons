import React from "react";
const SearchAdd: React.FC<
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
        d="m21.707 20.293-3.675-3.675a9 9 0 1 0-1.414 1.414l3.675 3.675a1 1 0 0 0 1.414-1.414M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14m1 3.5a1 1 0 1 0-2 0V10H7.5a1 1 0 1 0 0 2H10v2.5a1 1 0 1 0 2 0V12h2.5a1 1 0 1 0 0-2H12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SearchAdd;
