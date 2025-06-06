import React from "react";
const CargoShip: React.FC<
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
        d="M2 21.5c1.5 0 2.55-1 3.5-1s2.158 1.011 3 1c1.01.008 2.36-1 3.5-1s2.49 1.008 3.5 1c.842.011 2.05-1 3-1s2 1 3.5 1M5 13.5l1.802-6.758A1 1 0 0 1 7.768 6h8.463a1 1 0 0 1 .966.742L19 13.5M9 6l.793-2.775a1 1 0 0 1 .961-.725h2.492a1 1 0 0 1 .961.725L15 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 20.5c-1.5-2-2.5-3.5-3-6l9-4 9 4c-.5 2.5-1.5 4-3 6"
      />
    </svg>
  );
};
export default CargoShip;
