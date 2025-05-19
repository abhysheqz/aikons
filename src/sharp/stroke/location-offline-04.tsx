import React from "react";
const LocationOffline_04: React.FC<
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
        d="M6.975 3.793A7.92 7.92 0 0 1 12 2c4.418 0 8 3.618 8 8.08 0 1.944-.58 3.557-1.739 5m-1.58 1.6C15.237 18.022 13 20.47 12 22c-1.025-1.682-3.59-4.362-5-5.611-2-1.772-3-3.756-3-6.308a8.1 8.1 0 0 1 1.446-4.636M2 2l20 20"
      />
    </svg>
  );
};
export default LocationOffline_04;
