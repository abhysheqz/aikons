import React from "react";
const ArrowExpand_01: React.FC<
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
        d="M16.5 3.266c.844-.012 3.64-.593 4.234 0s.012 3.39 0 4.234m-.228-4.009-7.004 7.005M3.266 16.5c-.012.845-.593 3.641 0 4.234s3.39.012 4.234 0m3.002-7.236-7.004 7.005"
      />
    </svg>
  );
};
export default ArrowExpand_01;
