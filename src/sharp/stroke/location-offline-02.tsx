import React from "react";
const LocationOffline_02: React.FC<
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
        d="m2 2 20 20"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19.3 16.122C20.303 14.661 21 12.947 21 11A9 9 0 0 0 6.82 3.64m11.043 14.224C15.266 20.548 12 22 12 22s-9-4-9-11c0-2.23.81-4.27 2.153-5.842"
      />
    </svg>
  );
};
export default LocationOffline_02;
