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
        d="M7.75 2.25h-5.5v5.5h5.5zM2.25 9.25v5.5h5.5v-5.5zM2.25 16.25v5.5h5.5v-5.5zM9.25 21.75h5.5v-5.5h-5.5zM16.25 21.75h5.5v-5.5h-5.5zM21.75 14.75v-5.5h-5.5v5.5zM21.75 7.75v-5.5h-5.5v5.5zM14.75 2.25h-5.5v5.5h5.5zM9.25 14.75v-5.5h5.5v5.5z"
      />
    </svg>
  );
};
export default GridTable;
