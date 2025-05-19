import React from "react";
const More_03: React.FC<
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
        d="M2.25 2.25h4.5v4.5h-4.5zM17.25 2.25h4.5v4.5h-4.5zM9.75 2.25h4.5v4.5h-4.5zM2.25 17.25h4.5v4.5h-4.5zM2.25 9.75h4.5v4.5h-4.5zM17.25 17.25h4.5v4.5h-4.5zM17.25 9.75h4.5v4.5h-4.5zM9.75 17.25h4.5v4.5h-4.5zM9.75 9.75h4.5v4.5h-4.5z"
      />
    </svg>
  );
};
export default More_03;
