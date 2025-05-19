import React from "react";
const ColorPicker: React.FC<
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
        d="m19.002 9.002 2.498-2.5L17.504 2.5l-2.498 2.5m3.996 4.001 1.499 1.5m-1.499-1.5-3.995-4m0 0-1.499-1.5M13.488 6.483l-6.973 7m0 0L2.5 17.513v3.986h4.024l8.015-8.016m-8.024 0h8.024m0 0 2.977-2.978"
      />
    </svg>
  );
};
export default ColorPicker;
