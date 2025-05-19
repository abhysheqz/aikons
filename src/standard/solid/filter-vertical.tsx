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
        d="M7 21.5a1 1 0 0 1-1-1V18a1 1 0 1 1 2 0v2.5a1 1 0 0 1-1 1M17 21.5a1 1 0 0 1-1-1v-5a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1M18 3.5V6a1 1 0 1 1-2 0V3.5a1 1 0 1 1 2 0M8 3.5v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 2 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.25 7c0-.966.784-1.75 1.75-1.75h4c.966 0 1.75.784 1.75 1.75v4A1.75 1.75 0 0 1 19 12.75h-4A1.75 1.75 0 0 1 13.25 11zM3.25 13c0-.966.784-1.75 1.75-1.75h4c.966 0 1.75.784 1.75 1.75v4A1.75 1.75 0 0 1 9 18.75H5A1.75 1.75 0 0 1 3.25 17z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FilterVertical;
