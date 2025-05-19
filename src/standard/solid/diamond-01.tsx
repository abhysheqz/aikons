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
        fill="currentColor"
        fillRule="evenodd"
        d="M10.006 3.01a2.75 2.75 0 0 1 3.988 0l6.741 7.096a2.75 2.75 0 0 1 0 3.789l-6.741 7.096a2.75 2.75 0 0 1-3.988 0l-6.741-7.096a2.75 2.75 0 0 1 0-3.789z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Diamond_01;
