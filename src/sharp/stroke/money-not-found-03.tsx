import React from "react";
const MoneyNotFound_03: React.FC<
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
        d="M10.232 10.232a2.5 2.5 0 1 0 3.535 3.535M3 3l18 18M2 14.494a4 4 0 0 1 4 4m16-9.027c-1.735 0-3.5-1.93-3.5-3.969m3.5 9.5c-.83 0-1.649.25-2.32.681M5.807 6.274C5.33 7.724 3.744 8.998 2 8.998"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M9.79 5.79c2.037-.231 3.563-.792 6.21-.792 4 0 6 1 6 1v12.003M5.244 5.66C4.303 5.52 3.234 5.306 2 4.997v13c8 2 9 0 14 0q.823.001 1.533.051"
      />
    </svg>
  );
};
export default MoneyNotFound_03;
