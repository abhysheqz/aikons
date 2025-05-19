import React from "react";
const FilterHorizontal: React.FC<
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
        d="M6 8H3V6h3zM9 18H3v-2h6zM21 18h-3v-2h3zM21 8h-6V6h6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.25 3.25h7.5v7.5h-7.5zM11.25 13.25h7.5v7.5h-7.5z"
      />
    </svg>
  );
};
export default FilterHorizontal;
