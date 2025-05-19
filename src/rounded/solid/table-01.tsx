import React from "react";
const Table_01: React.FC<
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
        d="M2 3a1 1 0 1 0 0 2h1v4.558l-.076.078a6 6 0 0 0-.852 1.13c-.577.998-1.01 2.47-.39 4.232.877 2.497-.05 3.972-.37 4.276a1 1 0 0 0 1.376 1.452c.93-.881 2.003-3.199.88-6.391-.38-1.082-.126-1.943.235-2.568.185-.32.397-.572.562-.745L4.387 11h15.226l.022.022c.165.172.377.425.562.745.36.625.615 1.486.235 2.568-1.123 3.192-.05 5.51.88 6.39a1 1 0 1 0 1.376-1.45c-.32-.305-1.247-1.78-.37-4.277.62-1.762.187-3.234-.39-4.232A6 6 0 0 0 21 9.558V5h1a1 1 0 1 0 0-2zm9 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Table_01;
