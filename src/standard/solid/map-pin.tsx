import React from "react";
const MapPin: React.FC<
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
        d="M13 6.042a2.5 2.5 0 1 0-2 0V10a1 1 0 1 0 2 0z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 8.25h-4.5V10a2.5 2.5 0 0 1-5 0V8.25H5A3.75 3.75 0 0 0 1.25 12v7A3.75 3.75 0 0 0 5 22.75h14A3.75 3.75 0 0 0 22.75 19v-7A3.75 3.75 0 0 0 19 8.25M6.504 11.136a1 1 0 1 0-1.008 1.728l3.11 1.814-3.157 2.088a1 1 0 1 0 1.103 1.668l3.981-2.632 6.963 4.062a1 1 0 1 0 1.008-1.728l-2.816-1.642 2.867-1.912a1 1 0 0 0-1.11-1.664l-3.68 2.454z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MapPin;
