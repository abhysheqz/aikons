import React from "react";
const FourSquare: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.997 12c0-4.478 0-6.718 1.391-8.109S8.018 2.5 12.498 2.5c4.477 0 6.717 0 8.108 1.391s1.391 3.63 1.391 8.109c0 4.478 0 6.718-1.391 8.109s-3.63 1.391-8.109 1.391c-4.478 0-6.717 0-8.109-1.391-1.39-1.392-1.39-3.63-1.39-8.109"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.497 7v5.5m0 0V17m0-4.5H9.933a.436.436 0 0 1-.418-.561L10.997 7"
      />
    </svg>
  );
};
export default FourSquare;
