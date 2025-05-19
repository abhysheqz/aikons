import React from "react";
const SearchList_02: React.FC<
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
        d="M1.5 8.5h6v2h-6zM1.5 13.5h6v2h-6zM1.5 18.5h18v2h-18zM9 9.5a6 6 0 1 1 10.89 3.476l2.61 2.61L21.086 17l-2.61-2.61A6 6 0 0 1 9 9.5m8.827 2.83.002-.003a4 4 0 1 0-5.655-5.659 4 4 0 0 0 5.653 5.661"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SearchList_02;
