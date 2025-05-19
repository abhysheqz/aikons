import React from "react";
const ArrowUpDouble: React.FC<
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
        d="M11.293 4.793a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L12 6.914l-5.293 5.293a1 1 0 0 1-1.414-1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.293 11.793a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L12 13.914l-5.293 5.293a1 1 0 0 1-1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowUpDouble;
