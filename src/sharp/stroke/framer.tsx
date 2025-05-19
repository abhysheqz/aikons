import React from "react";
const Framer: React.FC<
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
        d="m11.996 20.998-5.99-6h5.99z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m11.961 8.952 6.024 6.05a.01.01 0 0 1-.007.018H6.008a.01.01 0 0 1-.01-.01V8.952zm0 0L6.055 3.02a.01.01 0 0 1 .007-.018h11.94v5.95z"
      />
    </svg>
  );
};
export default Framer;
