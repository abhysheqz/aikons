import React from "react";
const SearchVisual: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m15.5 15 2 2m-1-5.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0ZM9 2.5H2.5V9M15 2.5h6.5V9M15 21.5h6.5V15M9 21.5H2.5V15"
      />
    </svg>
  );
};
export default SearchVisual;
