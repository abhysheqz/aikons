import React from "react";
const Menu_06: React.FC<
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
        d="M4 5h16"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4.002 12h3.944m0 0 1.568 1.928L11.041 12m-3.095 0h3.095m0 0H20"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 19h16"
      />
    </svg>
  );
};
export default Menu_06;
