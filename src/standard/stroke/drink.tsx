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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.5 6h-14l7 10zM8.5 6 8 3 5.5 2M9.5 16v6M8 22h3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15.36 8.033A3.52 3.52 0 0 0 17.982 9.2 3.51 3.51 0 0 0 21.5 5.7c0-1.933-1.575-3.5-3.518-3.5a3.51 3.51 0 0 0-3.482 3"
      />
    </svg>
  );
};
export default Drink;
