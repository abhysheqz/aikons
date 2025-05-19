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
        d="M2.5 7a1 1 0 0 1 1-1H6a1 1 0 0 1 0 2H3.5a1 1 0 0 1-1-1M2.5 17a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1M20.5 18H18a1 1 0 1 1 0-2h2.5a1 1 0 1 1 0 2M20.5 8h-5a1 1 0 1 1 0-2h5a1 1 0 1 1 0 2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.25 5c0-.966.784-1.75 1.75-1.75h4c.966 0 1.75.784 1.75 1.75v4A1.75 1.75 0 0 1 11 10.75H7A1.75 1.75 0 0 1 5.25 9zM11.25 15c0-.966.784-1.75 1.75-1.75h4c.966 0 1.75.784 1.75 1.75v4A1.75 1.75 0 0 1 17 20.75h-4A1.75 1.75 0 0 1 11.25 19z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FilterHorizontal;
