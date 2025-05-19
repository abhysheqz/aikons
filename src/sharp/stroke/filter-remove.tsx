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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m20.99 8-6.992 7m6.991 0-6.991-7"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m14.294 17.007-.3 2.011-3.887 1.968a.1.1 0 0 1-.145-.078l-.955-8.925-6.008-5v-3.88a.1.1 0 0 1 .1-.1h17.803a.1.1 0 0 1 .1.1V6.03"
      />
    </svg>
  );
};
export default FilterRemove;
