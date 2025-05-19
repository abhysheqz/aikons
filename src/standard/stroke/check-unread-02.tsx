import React from "react";
const CheckUnread_02: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.5 13.5S4.5 14 6 17c0 0 .285-.48.821-1.247M16.5 6c-1.508.754-3.062 2.055-4.497 3.503M7.5 13.5s2 .5 3.5 3.5c0 0 .715-1.105 1.864-2.636M21.5 6c-2.395 1.198-4.905 3.772-6.87 6.13M3.5 5l14 14"
      />
    </svg>
  );
};
export default CheckUnread_02;
