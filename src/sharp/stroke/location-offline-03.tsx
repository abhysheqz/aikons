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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m2 2 20 20M6.975 3.793A7.92 7.92 0 0 1 12 2c4.418 0 8 3.618 8 8.08 0 1.943-.58 3.557-1.739 4.999m-1.58 1.6C15.237 18.022 13 20.47 12 22c-1.025-1.681-3.59-4.36-5-5.61-2-1.772-3-3.757-3-6.308a8.1 8.1 0 0 1 1.446-4.636"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.513 7.33a3.5 3.5 0 0 1 4.656 4.656m-1.56 1.623A3.5 3.5 0 0 1 8.892 8.89"
      />
    </svg>
  );
};
export default LocationOffline_03;
