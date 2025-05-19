import React from "react";
const WifiDisconnected_03: React.FC<
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
        strokeWidth={2}
        d="M12 18h.012"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.25 15c2-2 5.5-2 7.5 0M5.5 12c2.415-2.013 5.28-2.81 8-2.392M2 9c3.466-2.927 7.248-4.247 11-3.962M22 5l-6 6m6 0-6-6"
      />
    </svg>
  );
};
export default WifiDisconnected_03;
