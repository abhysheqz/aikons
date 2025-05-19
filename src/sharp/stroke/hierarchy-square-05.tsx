import React from "react";
const HierarchySquare_05: React.FC<
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
        d="M9 8V2H2v6zM9 22v-6H2v6zM22 15V9h-7v6zM12 12.001V5H9m3 7.001V19H9m3-6.999h3"
      />
    </svg>
  );
};
export default HierarchySquare_05;
