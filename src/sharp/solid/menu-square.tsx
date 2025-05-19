import React from "react";
const MenuSquare: React.FC<
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
        d="M3 11h8V3H3zM13 11h8V3h-8zM3 21h8v-8H3zM13 21h8v-8h-8z"
      />
    </svg>
  );
};
export default MenuSquare;
