import React from "react";
const Menu_08: React.FC<
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
        d="M20 6H4V4h16zM18 13H6v-2h12zM16 20H8v-2h8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Menu_08;
