import React from "react";
const GpsDisconnected: React.FC<
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
        d="M15.293 1.293a1 1 0 0 1 1.414 0L19 3.586l2.293-2.293a1 1 0 1 1 1.414 1.414L20.414 5l2.293 2.293a1 1 0 0 1-1.414 1.414L19 6.414l-2.293 2.293a1 1 0 1 1-1.414-1.414L17.586 5l-2.293-2.293a1 1 0 0 1 0-1.414M13.264 10.737a2.515 2.515 0 0 0-3.557 0 1 1 0 1 1-1.414-1.415 4.515 4.515 0 0 1 6.385 6.385 1 1 0 0 1-1.415-1.414 2.515 2.515 0 0 0 0-3.556"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.135 6.403c.633-.9 1.86-.876 2.555-.181l12.088 12.087c.695.695.718 1.922-.181 2.555a10.34 10.34 0 0 1-5.967 1.886c-5.733 0-10.38-4.648-10.38-10.38 0-2.22.697-4.279 1.885-5.967"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GpsDisconnected;
