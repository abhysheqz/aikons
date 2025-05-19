import React from "react";
const BluetoothCircle: React.FC<
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
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.595 12V8.612c0-.943 0-1.415.294-1.57.295-.154.67.12 1.421.668l.845.618c.563.41.845.616.845.901s-.282.491-.845.902zm0 0v3.388c0 .943 0 1.414.294 1.57.295.154.67-.12 1.421-.668l.845-.617c.563-.412.845-.617.845-.902s-.282-.491-.845-.902zm0 0L9 9.778M11.595 12 9 14.222"
      />
    </svg>
  );
};
export default BluetoothCircle;
