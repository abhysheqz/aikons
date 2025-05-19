import React from "react";
const ArrowDiagonal: React.FC<
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
        d="M16.5 3.266c.845-.012 3.641-.593 4.234 0s.012 3.39 0 4.234M3.266 16.5c-.012.844-.593 3.64 0 4.234s3.39.012 4.234 0M3.896 20.058 20.105 3.942"
      />
    </svg>
  );
};
export default ArrowDiagonal;
