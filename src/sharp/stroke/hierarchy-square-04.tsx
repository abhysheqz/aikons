import React from "react";
const HierarchySquare_04: React.FC<
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
        d="M9 15V9H2v6zM22 8V2h-7v6zM22 22v-6h-7v6zM12 12v7h3m-3-7V5h3m-3 7H9"
      />
    </svg>
  );
};
export default HierarchySquare_04;
