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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 10h8V2H2zM14 10h8V2h-8zM2 22h8v-8H2zM14 22h8v-8h-8z"
      />
    </svg>
  );
};
export default MenuSquare;
