import React from "react";
const SortingAz_01: React.FC<
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
        d="M14 9.5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-.247.659L16.766 13.5H18.5a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1V14a1 1 0 0 1 .247-.659l2.487-2.841H15a1 1 0 0 1-1-1M4.057 8.659A1 1 0 0 1 4.997 8H6a1 1 0 0 1 .94.658l2 5.5a1 1 0 1 1-1.88.684L5.5 10.548l-1.56 4.293a1 1 0 0 1-1.88-.682zM9.5 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.875 1.72a1 1 0 0 1 1.406.155l2 2.5A1 1 0 0 1 18.5 6H4a1 1 0 0 0-1 1v.5a1 1 0 0 1-2 0V7a3 3 0 0 1 3-3h12.42l-.7-.875a1 1 0 0 1 .155-1.406M8.707 22.207a1 1 0 0 1-1.414 0l-2.5-2.5a1 1 0 0 1 .7-1.707l14.513-.103a1 1 0 0 0 .993-.998l.001-.402a1 1 0 0 1 2 .006l-.001.401a3 3 0 0 1-2.979 2.993l-12.123.086.81.81a1 1 0 0 1 0 1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SortingAz_01;
