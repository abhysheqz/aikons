import React from "react";
const Euro: React.FC<
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
        d="M4 10a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 10c0-4.341 3.267-8 7.461-8 2.755 0 5.127 1.594 6.413 3.906a1 1 0 1 1-1.748.972C17.151 5.125 15.408 4 13.461 4 10.52 4 8 6.61 8 10v4c0 3.39 2.52 6 5.461 6 1.947 0 3.69-1.125 4.665-2.878a1 1 0 1 1 1.748.972C18.588 20.406 16.216 22 13.462 22 9.266 22 6 18.341 6 14z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Euro;
