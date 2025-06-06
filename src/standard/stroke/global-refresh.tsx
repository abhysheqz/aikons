import React from "react";
const GlobalRefresh: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.986 5.698c-.934.067-2.13.429-2.96 1.503-1.499 1.94-2.997 2.102-3.996 1.455-1.499-.97-.24-2.541-1.998-3.395C9.885 4.704 9.726 3.19 10.364 2M2 10.996c.762.662 1.83 1.268 3.087 1.268 2.598 0 3.117.496 3.117 2.482s0 1.987.52 3.476c.338.969.456 1.938-.218 2.77"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m20.218 18.228 1.63.437a4.5 4.5 0 0 0-7.012-4.79m-.052 2.897-1.63-.436a4.5 4.5 0 0 0 7.012 4.79"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 22c-5.053-.502-9-4.815-9-10C2 6.477 6.477 2 12 2c5.185 0 9.498 3.947 10 9"
      />
    </svg>
  );
};
export default GlobalRefresh;
