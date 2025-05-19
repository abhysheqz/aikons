import React from "react";
const Suit_02: React.FC<
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
        d="m10.001 6.998 1.571 2.5-2.57 8.5 2.999 4 3-4-2.572-8.5 1.572-2.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.5 19.998H19l2.998-14.99a.01.01 0 0 0-.007-.013L18 3.998m0 0-1.994-1.994a.01.01 0 0 0-.013-.001L12 4.998m6-1-2.993 3.99a.01.01 0 0 1-.015.002L12 4.998m0 0L8.007 2.003a.01.01 0 0 0-.013 0L6 3.999m6 1L9.008 7.99a.01.01 0 0 1-.015-.001L6 3.998m0 0-3.99.997a.01.01 0 0 0-.008.012L5 19.997h2.5"
      />
    </svg>
  );
};
export default Suit_02;
