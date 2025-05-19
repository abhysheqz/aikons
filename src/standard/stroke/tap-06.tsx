import React from "react";
const Tap_06: React.FC<
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
        d="M8 21.5V20l-2.465-3.287a2.675 2.675 0 0 1 .249-3.497L8 11m5.617.5h1.077c.891 0 1.614.672 1.614 1.5v1M11 13.5v-7a1.5 1.5 0 0 0-3 0V11m5.617 2.5V12c0-.828-.723-1.5-1.615-1.5h-.538m6.036 11V20l.854-1.2c.42-.52.646-1.15.646-1.8v-2.5c0-1.105-.964-2-2.153-2M8 14.5V11"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.5 6.5a4 4 0 0 1 8 0"
      />
    </svg>
  );
};
export default Tap_06;
