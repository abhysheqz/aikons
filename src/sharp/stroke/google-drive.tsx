import React from "react";
const GoogleDrive: React.FC<
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
        d="m9 3.987 6.994 10.997M5.505 20.488l6.5-11.5M21.005 14.988h-12"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22 14.992 15.026 2.998H8.996a.01.01 0 0 0-.008.005l-6.99 12.01L5 20.997a.01.01 0 0 0 .008.005H19.01L22 15.001a.01.01 0 0 0 0-.01Z"
      />
    </svg>
  );
};
export default GoogleDrive;
