import React from "react";
const Menu_05: React.FC<
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
        d="M14 6H4V4h10zM20 13H4v-2h16zM20 20H4v-2h16z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Menu_05;
