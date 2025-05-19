import React from "react";
const MenuCollapse: React.FC<
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
        d="M3 6h14M3 12h10M3 18h14M21 8l-1.154.877C17.95 10.318 17 11.039 17 12s.949 1.682 2.846 3.124L21 16"
      />
    </svg>
  );
};
export default MenuCollapse;
