import React from "react";
const Shaka_03: React.FC<
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
        d="M14 16.489a1.5 1.5 0 1 0 0-2.998m0 2.997 6.117 1.247a1.643 1.643 0 0 1-.49 3.249L2.5 17.488m11.5-1h-2a1.5 1.5 0 1 1 0-2.997h.5m2.5-2.997a1.5 1.5 0 1 0 0-2.998h-2a1.5 1.5 0 1 0 0 2.998m2 0h-2m2 0h-.5a1.5 1.5 0 1 1 0 2.997h-2m.5-2.997h-.5a1.5 1.5 0 1 0 0 2.997M9.5 9.5l3.623-3.623c.713-.71.648-1.88-.14-2.508a1.7 1.7 0 0 0-2.072-.032L5.46 8 2.5 7.996"
      />
    </svg>
  );
};
export default Shaka_03;
