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
      <path stroke="currentColor" strokeWidth={1.5} d="M4 3.99 20 20" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6.002 16.999 6-5.004.001 8.506 5.499-3.21"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m12.021 7.842-.069-4.24a.1.1 0 0 1 .15-.089l5.816 3.43a.1.1 0 0 1 .013.163l-3.642 3.004"
      />
    </svg>
  );
};
export default BluetoothNotConnected;
