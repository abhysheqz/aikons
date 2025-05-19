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
        fill="currentColor"
        fillRule="evenodd"
        d="M8 18v3H6v-3zM18 15v6h-2v-6zM18 3v3h-2V3zM8 3v6H6V3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.25 5.25h7.5v7.5h-7.5zM3.25 11.25h7.5v7.5h-7.5z"
      />
    </svg>
  );
};
export default FilterVertical;
