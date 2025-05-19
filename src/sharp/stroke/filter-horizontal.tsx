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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 7h3M3 17h6M18 17h3M15 7h6"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 4H6v6h6zM18 14h-6v6h6z"
      />
    </svg>
  );
};
export default FilterHorizontal;
