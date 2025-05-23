import React from "react";
const SolarSystem: React.FC<
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
        d="m12 7 1.39 1.28 1.874-.074.254 1.887L17 11.26l-1 1.612.397 1.861-1.786.582L13.736 17 12 16.28l-1.736.72-.875-1.685-1.786-.582L8 12.872 7 11.26l1.482-1.167.254-1.887 1.875.074z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M6.483 3.658a2 2 0 1 0-2.825 2.825m2.825-2.825a2 2 0 0 1-2.825 2.825m2.825-2.825A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10a9.95 9.95 0 0 1-1.647 5.5M3.658 6.483A9.95 9.95 0 0 0 2 12c0 5.523 4.477 10 10 10 2.04 0 3.936-.61 5.517-1.658m0 0a2 2 0 1 0 2.966-2.684 2 2 0 0 0-2.966 2.684Z"
      />
    </svg>
  );
};
export default SolarSystem;
