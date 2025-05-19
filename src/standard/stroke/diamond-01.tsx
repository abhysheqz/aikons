import React from "react";
const Diamond_01: React.FC<
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
        d="M20.191 13.378a2 2 0 0 0 0-2.755L13.45 3.526a2 2 0 0 0-2.9 0l-6.741 7.097a2 2 0 0 0 0 2.755l6.741 7.096a2 2 0 0 0 2.9 0z"
      />
    </svg>
  );
};
export default Diamond_01;
