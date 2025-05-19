import React from "react";
const SearchFocus: React.FC<
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
        d="M6.25 6.25h3.5v2h-1.5v1.5h-2zm5.5 0h3.5v3.5h-2v-1.5h-1.5zm-3.5 5.5v1.5h1.5v2h-3.5v-3.5zm7 0v3.5h-3.5v-2h1.5v-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.75 1.75a9 9 0 1 0 5.618 16.032l4.468 4.468 1.414-1.414-4.468-4.468A9 9 0 0 0 10.75 1.75m-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SearchFocus;
