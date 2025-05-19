import React from "react";
const Stamp: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 18.5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3H5zM14 13h-4M9.5 16l.395-4.773c.064-.77-.358-1.482-.874-2.057a4 4 0 1 1 5.958 0c-.516.575-.938 1.286-.874 2.057L14.5 16"
      />
    </svg>
  );
};
export default Stamp;
