import React from "react";
const MenuCircle: React.FC<
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
        strokeWidth={1.5}
        d="M10 6a4 4 0 1 0-8 0 4 4 0 0 0 8 0ZM10 18a4 4 0 1 0-8 0 4 4 0 0 0 8 0ZM22 6a4 4 0 1 0-8 0 4 4 0 0 0 8 0ZM22 18a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"
      />
    </svg>
  );
};
export default MenuCircle;
