import React from "react";
const Dish_01: React.FC<
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
      <path fill="currentColor" d="M3.22 17.5H2v-2h20v2h-1.22l-1 4H4.22z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 4.5h-1v-2h4v2h-1v1.055c4.5.497 8 4.312 8 8.945h-2a7 7 0 1 0-14 0H3c0-4.633 3.5-8.448 8-8.945z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Dish_01;
