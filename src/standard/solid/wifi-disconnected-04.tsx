import React from "react";
const WifiDisconnected_04: React.FC<
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
        d="M14.293 14.293a1 1 0 0 1 1.414 0L18 16.586l2.293-2.293a1 1 0 0 1 1.414 1.414L19.414 18l2.293 2.293a1 1 0 0 1-1.414 1.414L18 19.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L16.586 18l-2.293-2.293a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.995 2.25c-3.487 0-6.693 1.21-9.217 3.234-1.118.896-1.171 2.46-.4 3.525l8.2 11.314c.46.634 1.24.851 1.918.65.007-.63.25-1.26.732-1.74L14.461 18l-1.233-1.232a2.5 2.5 0 0 1 3.536-3.536L17.8 14.27l3.811-5.26c.773-1.065.72-2.63-.398-3.525a14.7 14.7 0 0 0-9.218-3.234"
      />
    </svg>
  );
};
export default WifiDisconnected_04;
