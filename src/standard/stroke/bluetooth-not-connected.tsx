import React from "react";
const BluetoothNotConnected: React.FC<
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
        d="m17.502 17.5-5.5 3.5L12 12l-6 5m6.001-9V3L18 7l-3.498 3M3 3l18 18"
      />
    </svg>
  );
};
export default BluetoothNotConnected;
