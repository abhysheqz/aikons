import React from "react";
const HierarchySquare_06: React.FC<
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
        d="M16 7V2H8v5zM7 22v-5H2v5zM22 22v-5h-5v5zM14.5 12.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM12 7v3m-2.5 3-5 4m10-4 5 4"
      />
    </svg>
  );
};
export default HierarchySquare_06;
