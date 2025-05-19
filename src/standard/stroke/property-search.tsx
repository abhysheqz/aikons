import React from "react";
const PropertySearch: React.FC<
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
        d="M21 10.5V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h5.5M2 7h19M11 16h.5M7 16h1m3-4h3m-7 0h1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.3 20.298 22 22m-.8-4.4a3.6 3.6 0 1 0-7.2 0 3.6 3.6 0 0 0 7.2 0"
      />
    </svg>
  );
};
export default PropertySearch;
