import React from "react";
const MenuTwoLine: React.FC<
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
        d="M3 8h18v2H3zM3 14h12v2H3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MenuTwoLine;
