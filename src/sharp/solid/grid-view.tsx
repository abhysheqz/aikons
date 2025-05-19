import React from "react";
const GridView: React.FC<
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
        d="M2.25 2.25h8.5v8.5h-8.5zM13.25 2.25h8.5v8.5h-8.5zM2.25 13.25h8.5v8.5h-8.5zM13.25 13.25h8.5v8.5h-8.5z"
      />
    </svg>
  );
};
export default GridView;
