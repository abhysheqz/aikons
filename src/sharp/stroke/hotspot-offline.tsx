import React from "react";
const HotspotOffline: React.FC<
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
        d="M14 14a2 2 0 1 1-2-2M4 20a9.96 9.96 0 0 1-2-6 9.98 9.98 0 0 1 3.81-7.854M8.5 4.63A10 10 0 0 1 12 4c5.523 0 10 4.477 10 10 0 1.231-.223 2.41-.63 3.5M7.5 18A6.04 6.04 0 0 1 6 14a6.02 6.02 0 0 1 2.635-5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 14a6 6 0 0 0-6-6M2 2l20 20"
      />
    </svg>
  );
};
export default HotspotOffline;
