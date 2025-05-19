import React from "react";
const LocationOffline_01: React.FC<
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
        d="M9 9.25c-.335.537-.5 1.32-.5 2a3.5 3.5 0 0 0 3.5 3.5c.66 0 1.473-.183 2-.5M11.5 7.785a3.5 3.5 0 0 1 3.965 3.965M2 2.25l20 20"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19.3 16.372c1.004-1.461 1.7-3.175 1.7-5.122A9 9 0 0 0 6.82 3.89m11.043 14.224C15.266 20.798 12 22.25 12 22.25s-9-4-9-11c0-2.23.81-4.27 2.153-5.842"
      />
    </svg>
  );
};
export default LocationOffline_01;
