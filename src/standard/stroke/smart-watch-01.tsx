import React from "react";
const SmartWatch_01: React.FC<
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
      <circle cx={12} cy={12} r={6} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8 7.5.701-3.858A2 2 0 0 1 10.67 2h2.662a2 2 0 0 1 1.968 1.642L16 7.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m8 16.5.701 3.858A2 2 0 0 0 10.67 22h2.662a2 2 0 0 0 1.968-1.642L16 16.5"
      />
    </svg>
  );
};
export default SmartWatch_01;
