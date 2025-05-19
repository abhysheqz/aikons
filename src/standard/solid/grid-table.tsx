import React from "react";
const GridTable: React.FC<
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
        d="M5 2.25h2.75v5.5h-5.5V5A2.75 2.75 0 0 1 5 2.25M2.25 9.25v5.5h5.5v-5.5zM9.25 9.25v5.5h5.5v-5.5zM16.25 9.25v5.5h5.5v-5.5zM21.75 7.75h-5.5v-5.5H19A2.75 2.75 0 0 1 21.75 5zM21.75 16.25h-5.5v5.5H19A2.75 2.75 0 0 0 21.75 19zM14.75 16.25h-5.5v5.5h5.5zM7.75 16.25h-5.5V19A2.75 2.75 0 0 0 5 21.75h2.75zM14.75 7.75h-5.5v-5.5h5.5z"
      />
    </svg>
  );
};
export default GridTable;
