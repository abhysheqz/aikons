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
        d="M11.005 21.992C5.949 21.489 2 17.217 2 12.021 2 6.486 6.48 2 12.005 2c5.293 0 9.626 4.116 9.982 9.326"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.988 5.698c-.934.067-2.13.429-2.96 1.503-1.499 1.94-2.997 2.102-3.996 1.455-1.499-.97-.24-2.541-1.998-3.395C9.887 4.704 9.728 3.19 10.366 2M2 10.996c.762.662 1.83 1.268 3.087 1.268 2.598 0 3.117.496 3.117 2.482s0 1.987.52 3.476c.338.969.456 1.938-.218 2.77"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m19.494 17.5 2.006 1.494h.254c.604-1.819.053-3.628-1.15-4.765-1.397-1.321-3.65-1.751-5.606-.46m.505 3.719-2.006-1.493h-.254c-.604 1.819-.053 3.628 1.15 4.765 1.397 1.321 3.649 1.75 5.606.46"
      />
    </svg>
  );
};
export default GlobalRefresh;
