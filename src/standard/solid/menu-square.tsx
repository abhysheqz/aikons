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
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 4A2.75 2.75 0 0 1 4 1.25h4A2.75 2.75 0 0 1 10.75 4v4A2.75 2.75 0 0 1 8 10.75H4A2.75 2.75 0 0 1 1.25 8zM13.25 4A2.75 2.75 0 0 1 16 1.25h4A2.75 2.75 0 0 1 22.75 4v4A2.75 2.75 0 0 1 20 10.75h-4A2.75 2.75 0 0 1 13.25 8zM1.25 16A2.75 2.75 0 0 1 4 13.25h4A2.75 2.75 0 0 1 10.75 16v4A2.75 2.75 0 0 1 8 22.75H4A2.75 2.75 0 0 1 1.25 20zM13.25 16A2.75 2.75 0 0 1 16 13.25h4A2.75 2.75 0 0 1 22.75 16v4A2.75 2.75 0 0 1 20 22.75h-4A2.75 2.75 0 0 1 13.25 20z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MenuSquare;
