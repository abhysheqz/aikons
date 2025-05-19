import React from "react";
const FilterAdd: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.985 7.993v8m4-4h-8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21 6.97V3.102a.1.1 0 0 0-.1-.1H3.1a.1.1 0 0 0-.1.1v3.88l6.008 5 .955 8.925a.1.1 0 0 0 .145.078l3.865-1.99.29-1.947"
      />
    </svg>
  );
};
export default FilterAdd;
