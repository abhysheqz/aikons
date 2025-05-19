import React from "react";
const LocationFavourite_01: React.FC<
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
        d="M21 11c0 7-9 11-9 11s-9-4-9-11a9 9 0 0 1 18 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M14.743 7.29C13.146 6.457 12 7.684 12 7.684s-1.146-1.227-2.743-.394C7.323 8.298 7.184 12.247 12 14c4.816-1.753 4.677-5.702 2.743-6.71Z"
      />
    </svg>
  );
};
export default LocationFavourite_01;
