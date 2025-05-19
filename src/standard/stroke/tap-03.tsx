import React from "react";
const Tap_03: React.FC<
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
        d="M7.371 12.671 9.505 14.5V5.997a1.497 1.497 0 0 1 2.995 0V11h4a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-5.93a2 2 0 0 1-1.664-.89L4.89 15.088a1.74 1.74 0 0 1 2.482-2.417"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 6a4 4 0 1 1 8 0"
      />
    </svg>
  );
};
export default Tap_03;
