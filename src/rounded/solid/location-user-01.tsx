import React from "react";
const LocationUser_01: React.FC<
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
        d="M5.935 15.09c-1.5-3.695 1.06-7.84 4.912-7.84h2.306c3.852 0 6.412 4.145 4.912 7.84-.293.722-.97 1.198-1.727 1.198h-.712l-1.024 4.324C14.307 21.86 13.24 22.75 12 22.75c-1.24 0-2.307-.89-2.602-2.138l-1.024-4.323h-.712c-.758 0-1.434-.477-1.727-1.198"
      />
      <path
        fill="currentColor"
        d="M8.5 4.75a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
      />
    </svg>
  );
};
export default LocationUser_01;
