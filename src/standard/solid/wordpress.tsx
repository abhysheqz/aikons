import React from "react";
const Wordpress: React.FC<
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
        d="M1.25 6.5A.75.75 0 0 1 2 5.75h5.5a.75.75 0 0 1 .056 1.498l2.566 7.33 1.707-3.413a.75.75 0 1 1 1.342.67l-4.5 9a.75.75 0 0 1-1.377-.083L2.47 7.25H2a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.615 6.875c-1.363-1.63-.327-4.125 1.886-4.125 1.07 0 1.864.455 2.389 1.155.498.665.722 1.505.808 2.276a8.4 8.4 0 0 1-.468 3.844l-1.01 2.409-.026.056-2.529 4.856-.014.026-2 3.5a.75.75 0 0 1-1.357-.12L10.472 7.25H10a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .04 1.499l2.612 7.835 1.687-3.239c.203-.606.095-1.333-.323-2.208-.425-.892-1.12-1.829-1.901-2.762"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wordpress;
