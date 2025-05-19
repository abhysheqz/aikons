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
        fillRule="evenodd"
        d="M1.25 6a4.75 4.75 0 1 0 9.5 0 4.75 4.75 0 0 0-9.5 0M1.25 18a4.75 4.75 0 1 0 9.5 0 4.75 4.75 0 0 0-9.5 0M13.25 6a4.75 4.75 0 1 0 9.5 0 4.75 4.75 0 0 0-9.5 0M13.25 18a4.75 4.75 0 1 0 9.5 0 4.75 4.75 0 0 0-9.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MenuCircle;
