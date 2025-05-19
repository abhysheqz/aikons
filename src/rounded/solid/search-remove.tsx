import React from "react";
const SearchRemove: React.FC<
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
        d="m21.707 20.293-3.675-3.675a9 9 0 1 0-1.414 1.414l3.675 3.675a1 1 0 0 0 1.414-1.414M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14M8.707 7.293a1 1 0 0 0-1.414 1.414L9.586 11l-2.293 2.293a1 1 0 1 0 1.414 1.414L11 12.414l2.293 2.293a1 1 0 0 0 1.414-1.414L12.414 11l2.293-2.293a1 1 0 0 0-1.414-1.414L11 9.586z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SearchRemove;
