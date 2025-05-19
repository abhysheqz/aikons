import React from "react";
const HierarchySquare_02: React.FC<
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
        d="M8 22v-6H2v6zM22 22v-6h-6v6zM12 8v4m0 0H5v4m7-4h7v4M16 8V2H8v6z"
      />
    </svg>
  );
};
export default HierarchySquare_02;
