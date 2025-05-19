import React from "react";
const Shirt_01: React.FC<
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
        d="M6 9v11a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 12 2.633 8.633A1 1 0 0 1 2.559 7.3L6 3h3a3 3 0 1 0 6 0h3l3.44 4.301a1 1 0 0 1-.073 1.332L18 12"
      />
    </svg>
  );
};
export default Shirt_01;
