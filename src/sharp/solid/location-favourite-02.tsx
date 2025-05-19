import React from "react";
const LocationFavourite_02: React.FC<
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
        d="M12 1.25c-4.84 0-8.75 3.96-8.75 8.83 0 2.795 1.114 4.976 3.253 6.87 1.39 1.233 3.89 3.854 4.857 5.44a.75.75 0 0 0 1.268.02c1.03-1.575 3.492-4.239 4.87-5.46 2.138-1.894 3.252-4.075 3.252-6.87 0-4.87-3.91-8.83-8.75-8.83m0 6.032s1.29-1.403 3.086-.451C17.262 7.983 17.418 12.496 12 14.5c-5.418-2.004-5.262-6.517-3.086-7.669C10.71 5.879 12 7.282 12 7.282"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LocationFavourite_02;
