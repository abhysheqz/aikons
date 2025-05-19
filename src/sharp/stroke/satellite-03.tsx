import React from "react";
const Satellite_03: React.FC<
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
        strokeWidth={1.5}
        d="M17.89 11.465a3.787 3.787 0 0 0-5.355-5.356l-4.208 4.208 5.356 5.355z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.848 14c.12 1.57 1.57 3.008 3.152 3.13m-6.994-1.892c-.154 3.028 2.748 5.904 5.798 5.757M18 11l3 3-3 3-3-3m-2-8-3-3-3 3 3 3"
      />
    </svg>
  );
};
export default Satellite_03;
