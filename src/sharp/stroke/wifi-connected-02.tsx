import React from "react";
const WifiConnected_02: React.FC<
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
        d="M18.5 11.5c-3.768-3.333-9-3.333-13 0M2 8c6.316-5.333 13.684-5.333 20 0"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m9 18 2 2 5-5.499" />
    </svg>
  );
};
export default WifiConnected_02;
