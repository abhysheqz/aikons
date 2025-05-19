import React from "react";
const FilterVertical: React.FC<
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
        d="M7 21v-3M17 21v-6M17 6V3M7 9V3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20 6h-6v6h6zM10 12H4v6h6z"
      />
    </svg>
  );
};
export default FilterVertical;
