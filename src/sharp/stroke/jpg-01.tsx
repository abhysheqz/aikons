import React from "react";
const Jpg_01: React.FC<
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
        d="M20 13V9l-7-7H4v11m9-10.5V9h6.5M20 17v-1h-4v6h4v-2.5h-1.333M4 20v.25a1.75 1.75 0 1 0 3.5 0V16m2.5 6v-3m0 0v-3h2a1.5 1.5 0 0 1 0 3z"
      />
    </svg>
  );
};
export default Jpg_01;
