import React from "react";
const AirplaneModeOff: React.FC<
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
        d="m9 9-5.008 2.921A2 2 0 0 0 3 13.65V15.5l7-1.5v4l-2.5 2v2l4.5-1.5 4.5 1.5v-2L14 18v-4M9 5c.508-1.462 1.617-2.654 3-3 2 .5 3.373 2.52 3.198 4.627L15 9l5.008 2.921A2 2 0 0 1 21 13.65V15.5l-2-.5M2 2l20 20"
      />
    </svg>
  );
};
export default AirplaneModeOff;
