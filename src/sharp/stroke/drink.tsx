import React from "react";
const Drink: React.FC<
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
        d="M17 6H3l7 10zM9.5 6 9 3 6 2M10 16v6m-2 0h4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.5 8.373A3.5 3.5 0 1 0 14.035 6"
      />
    </svg>
  );
};
export default Drink;
