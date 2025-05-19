import React from "react";
const BatteryCharging_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 6h5v12h-7M8 6H2v12h4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m19 9.5 3 .507v3.986l-3 .507"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m11.562 6-3.56 6H12l-3.562 6"
      />
    </svg>
  );
};
export default BatteryCharging_02;
