import React from "react";
const Structure_04: React.FC<
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
        d="M2 12c0-2.482.518-3 3-3h2c2.482 0 3 .518 3 3s-.518 3-3 3H5c-2.482 0-3-.518-3-3ZM14 7c0-2.482.518-3 3-3h2c2.482 0 3 .518 3 3s-.518 3-3 3h-2c-2.482 0-3-.518-3-3ZM14 17c0-2.482.518-3 3-3h2c2.482 0 3 .518 3 3s-.518 3-3 3h-2c-2.482 0-3-.518-3-3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14 7-3 5 3 5"
      />
    </svg>
  );
};
export default Structure_04;
