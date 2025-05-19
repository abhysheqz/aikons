import React from "react";
const HierarchySquare_01: React.FC<
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
        d="M11 8V2H3v6zM20 14V9h-6v5zM20 22v-5h-6v5zM14 19.5H7v-8M7 8v3.5m0 0h7"
      />
    </svg>
  );
};
export default HierarchySquare_01;
