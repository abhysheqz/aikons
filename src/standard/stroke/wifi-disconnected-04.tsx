import React from "react";
const WifiDisconnected_04: React.FC<
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
        d="M12 21 2.991 8.57c-.572-.79-.5-1.89.26-2.5A13.94 13.94 0 0 1 12 3c3.31 0 6.352 1.149 8.749 3.07.76.61.832 1.71.26 2.5L18.523 12M21 15l-6 6m6 0-6-6"
      />
    </svg>
  );
};
export default WifiDisconnected_04;
