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
        fill="currentColor"
        d="M11 7a4 4 0 1 0-8 0 4 4 0 0 0 8 0M11 17a4 4 0 1 0-8 0 4 4 0 0 0 8 0M21 7a4 4 0 1 0-8 0 4 4 0 0 0 8 0M21 17a4 4 0 1 0-8 0 4 4 0 0 0 8 0"
      />
    </svg>
  );
};
export default MenuCircle;
