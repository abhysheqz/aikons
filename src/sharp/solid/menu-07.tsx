import React from "react";
const Menu_07: React.FC<
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
        d="M20 5.5H4v-2h16zM20 15.5H4v-2h16zM20 10.5H4v-2h16zM20 20.5H4v-2h16z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Menu_07;
