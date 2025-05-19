import React from "react";
const PenConnectBluetooth: React.FC<
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
        d="M5.124 1.26a1 1 0 0 1 .998-.003l3.5 2a1 1 0 0 1 .154 1.627L7.162 7.125l2.614 2.24a1 1 0 0 1-.155 1.628l-3.499 2a1 1 0 0 1-1.496-.868V9.299l-1.85 1.585a1 1 0 0 1-1.302-1.518l2.614-2.241-2.614-2.24a1 1 0 0 1 1.302-1.52l1.85 1.586V2.125a1 1 0 0 1 .498-.865M6.626 9.3l.771.66-.771.442zm0-4.35V3.848l.771.441zM22.039 10.25A2.855 2.855 0 1 0 18 6.21l-.93.93.068-.062 4.04 4.03zm-1.92 1.92-8.522 8.52a5.7 5.7 0 0 1-2.654 1.503l-2.636.66a.75.75 0 0 1-.91-.91l.66-2.636a5.7 5.7 0 0 1 1.502-2.654l8.583-8.583-.064.07z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PenConnectBluetooth;
