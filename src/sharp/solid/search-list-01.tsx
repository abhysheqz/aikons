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
        d="M1.5 8h6v2h-6zM1.5 13h6v2h-6zM1.5 3h18v2h-18zM9 13.5a6 6 0 1 1 10.89 3.477l2.61 2.609L21.086 21l-2.61-2.61A6 6 0 0 1 9 13.5m8.827 2.83.002-.003a4 4 0 1 0-5.655-5.659 4 4 0 0 0 5.653 5.661"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SearchList_01;
