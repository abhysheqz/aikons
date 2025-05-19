import React from "react";
const LocationOffline_03: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.354 3.938C3.745 5.522 2.75 7.683 2.75 10.081c0 2.707 1.327 4.706 2.924 6.41.684.73 1.438 1.426 2.17 2.102l.004.004.343.317c.849.786 1.655 1.555 2.344 2.375.75.89 2.176.92 2.95.034.708-.81 1.523-1.58 2.374-2.376l.156-.145c.714-.667 1.45-1.354 2.128-2.075l-3.357-3.357A4 4 0 0 1 9.13 7.714zM15.658 12.12a4 4 0 0 0-5.279-5.279L6.51 2.974A9.5 9.5 0 0 1 12 1.25c5.072 0 9.25 3.918 9.25 8.83 0 2.214-.904 3.985-2.119 5.514z"
      />
    </svg>
  );
};
export default LocationOffline_03;
