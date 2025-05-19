import React from "react";
const Menu_11: React.FC<
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
        d="M10 13h10v-2H10zM4 6h16V4H4zM4 20h16v-2H4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Menu_11;
