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
        d="M18 5H2v2h16zm-4 6H2v2h12zM2 17h16v2H2zm13.332-5 6.667 5V7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MenuCollapse;
