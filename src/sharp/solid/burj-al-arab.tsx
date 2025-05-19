import React from "react";
const BurjAlArab: React.FC<
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
        d="M21 22.5H3V21h18zM17 9.25H5v-1.5h12z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.177 9.25a12.9 12.9 0 0 1 1.573 6.194c0 2.34-.62 4.537-1.705 6.429a.75.75 0 0 1-.65.377H7a.75.75 0 0 1-.75-.75v-4.25H11v-1.5H6.25v-2.5H11v-1.5H6.25v-2.5H5v-1.5h12v1.5zM7.75 2.883V1.5h-1.5v4.75h7.666A12.7 12.7 0 0 0 7.75 2.883"
      />
    </svg>
  );
};
export default BurjAlArab;
