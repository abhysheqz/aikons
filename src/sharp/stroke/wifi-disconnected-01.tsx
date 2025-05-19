import React from "react";
const WifiDisconnected_01: React.FC<
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
        d="M8.5 16c.867-.867 1.92-1.358 3-1.474M5.5 12.5c3.173-3.173 7.122-3.83 10.5-1.968M2 8.5c6.316-5.333 13.684-5.333 20 0M21 13.5l-6 6m6 0-6-6"
      />
    </svg>
  );
};
export default WifiDisconnected_01;
