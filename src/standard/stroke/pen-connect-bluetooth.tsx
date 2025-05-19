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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m2 10 7-6-3.5-2v10L9 10 2 4M17 8l3 3m-1.594-4.383L7.964 17.058a4.96 4.96 0 0 0-1.305 2.306L6 22l2.636-.66a4.96 4.96 0 0 0 2.306-1.304L21.383 9.594a2.106 2.106 0 0 0-2.977-2.977"
      />
    </svg>
  );
};
export default PenConnectBluetooth;
