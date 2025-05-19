import React from "react";
const Bitcoin: React.FC<
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
        strokeWidth={1.5}
        d="M6 4h8.4C16.388 4 18 5.79 18 8s-1.612 4-3.6 4m0 0c1.988 0 3.6 1.79 3.6 4s-1.612 4-3.6 4H6m8.4-8H7.2M7 4v16M9 2v2m5-2v2M9 20v2m5-2v2"
      />
    </svg>
  );
};
export default Bitcoin;
