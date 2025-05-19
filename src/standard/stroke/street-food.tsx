import React from "react";
const StreetFood: React.FC<
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
        d="M7 4.5c0 1 1 1 1 2s-1 1-1 2 1 1 1 2-1 1-1 2 1 1 1 2M16 4.5c0 1 1 1 1 2s-1 1-1 2 1 1 1 2-1 1-1 2 1 1 1 2M7.5 17v5M16.5 17v5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4.5 5a3 3 0 0 1 6 0v9a3 3 0 1 1-6 0zM13.5 5a3 3 0 1 1 6 0v9a3 3 0 1 1-6 0z"
      />
    </svg>
  );
};
export default StreetFood;
