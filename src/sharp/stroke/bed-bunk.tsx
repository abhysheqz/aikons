import React from "react";
const BedBunk: React.FC<
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
        d="M2 11h15M2 8h20M9 5.5H5M9 14.5H5M2 17h15M2 20h20M17 12h5M17 15h5M22 4v18M17 4v18M2 4v18"
      />
    </svg>
  );
};
export default BedBunk;
