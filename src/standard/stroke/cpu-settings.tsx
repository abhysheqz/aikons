import React from "react";
const CpuSettings: React.FC<
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
        d="M18.001 14v-1m0 1A3.5 3.5 0 0 0 15 15.697M18.001 14c1.274 0 2.388.68 3 1.697m-6.001 0L14 15m1 .697a3.5 3.5 0 0 0-.5 1.803c0 .66.184 1.276.5 1.802m6.002-3.604 1-.698m-1 .697c.317.527.5 1.144.5 1.803 0 .66-.183 1.276-.5 1.802m-3 1.698v1m0-1A3.5 3.5 0 0 1 15 19.302M18 21c1.274 0 2.389-.68 3.001-1.698m-6.001 0L14 20m7.001-.698 1 .698M9 2v2m6-2v2M9 20v2M4 9H2m2 6H2m20-6h-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5M12 8H8"
      />
    </svg>
  );
};
export default CpuSettings;
