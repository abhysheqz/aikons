import React from "react";
const ArrowExpand_02: React.FC<
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
        d="M7.5 3.266c-.844-.012-3.64-.593-4.234 0s-.012 3.39 0 4.234m.228-4.009 7.004 7.005M20.734 16.5c.012.844.593 3.64 0 4.234s-3.39.012-4.234 0m-3.002-7.237 7.004 7.006"
      />
    </svg>
  );
};
export default ArrowExpand_02;
