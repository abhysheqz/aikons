import React from "react";
const BluetoothSquare: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm9.38 4.104A.75.75 0 0 0 11.248 7v3.39L8.98 8.486l-.965 1.148L10.832 12l-2.816 2.367.965 1.148 2.268-1.906V17a.75.75 0 0 0 1.13.646l3.5-2.058a.75.75 0 0 0 .102-1.221L13.164 12l2.817-2.367a.75.75 0 0 0-.102-1.22zm1.823 8.479L12.75 13.61v2.077zM12.75 8.31v2.078l1.454-1.222z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BluetoothSquare;
