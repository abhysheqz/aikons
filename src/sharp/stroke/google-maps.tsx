import React from "react";
const GoogleMaps: React.FC<
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
      <circle cx={12} cy={9} r={2.5} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9 17 9-11M6 12l8-9.5M7 5l3 2.5M18.257 12.545a21 21 0 0 1-2.34 3.333c-1.381 1.631-3.318 4.054-3.907 6.122-.48-1.69-2.08-3.809-3.168-5.18-.986-1.317-2.44-2.816-3.196-4.524C3.546 7.655 6.801 1.992 11.993 2c5.335-.015 8.543 5.851 6.263 10.545"
      />
    </svg>
  );
};
export default GoogleMaps;
