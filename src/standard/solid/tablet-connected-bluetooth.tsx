import React from "react";
const TabletConnectedBluetooth: React.FC<
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
        d="M19.998 21.75a2.75 2.75 0 0 0 2.75-2.75l.004-.894a1 1 0 1 0-2 0v.647a1 1 0 0 1-1 1H6.822V4.247h12.93a1 1 0 0 1 1 1v.716a1 1 0 0 0 2 0L22.748 5a2.75 2.75 0 0 0-2.75-2.75h-16A2.75 2.75 0 0 0 1.248 5v14a2.75 2.75 0 0 0 2.75 2.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.997 6.135a1 1 0 0 1 .998-.003l3.5 2a1 1 0 0 1 .154 1.627L19.035 12l2.614 2.24a1 1 0 0 1-.155 1.628l-3.5 2A1 1 0 0 1 16.5 17v-2.826l-1.85 1.585a1 1 0 0 1-1.302-1.518L15.961 12l-2.614-2.24a1 1 0 0 1 1.302-1.52l1.85 1.586V7a1 1 0 0 1 .498-.865m1.502 8.04.77.66-.77.442zm0-4.35V8.723l.77.441z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TabletConnectedBluetooth;
