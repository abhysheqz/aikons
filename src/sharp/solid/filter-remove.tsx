import React from "react";
const FilterRemove: React.FC<
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
        d="m18.957 11.5 2.793 2.793-1.414 1.414-2.793-2.793-2.793 2.793-1.414-1.414 2.793-2.793-2.793-2.793 1.414-1.414 2.793 2.793 2.793-2.793 1.414 1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3 2.25a.75.75 0 0 0-.75.75v4.351l6.038 5.032.967 8.7a.75.75 0 0 0 1.08.588l4.352-2.176.063-1.666-3.535-3.536 2.793-2.793-2.793-2.793 3.535-3.535 2.793 2.793 2.793-2.793 1.414 1.414V3a.75.75 0 0 0-.75-.75z"
      />
    </svg>
  );
};
export default FilterRemove;
