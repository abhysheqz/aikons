import React from "react";
const SearchMinus: React.FC<
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
        d="M10.75 1.75a9 9 0 1 0 5.618 16.032l4.468 4.468 1.414-1.414-4.468-4.468A9 9 0 0 0 10.75 1.75m-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M15.25 9.75v2h-9v-2z" />
    </svg>
  );
};
export default SearchMinus;
