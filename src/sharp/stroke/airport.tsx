import React from "react";
const Airport: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M10 12H6v10h4zM21 15H10v7h11zM21 6l-1 1m-3.5 0H20m0 0-3 3h-1m4-3v3.5M11 12H5L3 7.5V7h10v.5zM10 7H6L5 4.5V4h6v.5zM8 4V2"
      />
    </svg>
  );
};
export default Airport;
