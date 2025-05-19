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
        fill="currentColor"
        fillRule="evenodd"
        d="M3 5a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2zm0 6a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm-1 7a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M22 8a1 1 0 0 0-1.707-.707l-4 4a1 1 0 0 0 0 1.414l4 4A1 1 0 0 0 22 16z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MenuCollapse;
