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
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 16h20"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 6V4m-2 0h4M4 16l1 4h14l1-4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 14a8 8 0 1 0-16 0"
      />
    </svg>
  );
};
export default Dish_01;
