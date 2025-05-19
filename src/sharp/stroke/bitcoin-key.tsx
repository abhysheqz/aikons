import React from "react";
const BitcoinKey: React.FC<
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
        d="M8.5 6.997h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M15.625 19.488v-5.996m1.875 0v-1.499m0 8.994v-1.499m-1.875-2.998h3.75m0 0c.621 0 1.125.504 1.125 1.125v.749c0 .62-.504 1.124-1.125 1.124H14.5m4.875-2.998c.621 0 1.125-.503 1.125-1.124v-.75c0-.62-.504-1.124-1.125-1.124H14.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.509 2.002c-2.764 0-5.005 2.257-5.005 5.042 0 1.847 1.027 3.409 2.497 4.287v8.158l2.4 2.482a.1.1 0 0 0 .143 0l2.506-2.494v-1.48l-1.562-1.5 1.562-1.512-.071-3.663c1.382-.757 2.535-2.315 2.535-4.278 0-2.785-2.24-5.042-5.005-5.042Z"
      />
    </svg>
  );
};
export default BitcoinKey;
