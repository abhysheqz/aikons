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
        fill="currentColor"
        d="M20.336 21.75 2.25 3.664 3.664 2.25 21.75 20.336zM11.502 2.633a1 1 0 0 1 1.002.003l5.999 3.5a1 1 0 0 1 .136 1.632l-3.945 3.392-1.42-1.42 2.989-2.595L13 5.24v4.225l-2-2V3.5a1 1 0 0 1 .502-.867"
      />
      <path
        fill="currentColor"
        d="M12.424 11.094A1 1 0 0 1 13 12v6.759l3.996-2.331 1.008 1.727-5.5 3.209a1 1 0 0 1-1.503-.864L11 14.135l-4.36 3.633-1.28-1.536 6-5a1 1 0 0 1 1.064-.138"
      />
    </svg>
  );
};
export default BluetoothNotConnected;
