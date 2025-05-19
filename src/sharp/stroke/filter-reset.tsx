import React from "react";
const FilterReset: React.FC<
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
        strokeWidth={1.5}
        d="m14.294 17.007-.3 2.011-3.887 1.968a.1.1 0 0 1-.145-.078l-.955-8.925-6.008-5v-3.88a.1.1 0 0 1 .1-.1h17.803a.1.1 0 0 1 .1.1V6.03"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.008 12.142c.29 1.541 1.781 2.874 3.405 2.874a3.57 3.57 0 0 0 3.588-3.575 3.59 3.59 0 0 0-3.582-3.604c-1.166.06-2.024.593-3.1 1.397m-.3-2.23v2.833"
      />
    </svg>
  );
};
export default FilterReset;
