import React from "react";
const HotelBell: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M2 20.5h20M4 14.5a8 8 0 1 1 16 0 1.77 1.77 0 0 1 1.747 1.48L22 17H2l.253-1.02A1.77 1.77 0 0 1 4 14.5ZM12 6.5v-3m0 0H9.5m2.5 0h2.5M19 5.5l-.5 1m3 1.5-1 .5M5 5.5l.5 1m-2 2-1-.5"
      />
    </svg>
  );
};
export default HotelBell;
