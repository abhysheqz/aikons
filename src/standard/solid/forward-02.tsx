import React from "react";
const Forward_02: React.FC<
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
        d="M11.25 6.921c0-1.416 1.594-2.246 2.754-1.434l7.256 5.08a1.75 1.75 0 0 1 0 2.867l-7.256 5.08c-1.16.811-2.754-.018-2.754-1.434z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 6.921c0-1.416 1.594-2.246 2.754-1.434l7.256 5.08a1.75 1.75 0 0 1 0 2.867l-7.256 5.08c-1.16.811-2.754-.018-2.754-1.434z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Forward_02;
