import React from "react";
const BluetoothSearch: React.FC<
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
        d="M3 17 15 7 9.001 3v18l2.001-1M3 7l8.002 6.5M21 21l-2.147-2.147m0 0a3.43 3.43 0 0 0 1.004-2.424 3.429 3.429 0 1 0-1.004 2.424"
      />
    </svg>
  );
};
export default BluetoothSearch;
