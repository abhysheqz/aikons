import React from "react";
const PackageDelivered: React.FC<
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
        d="m22.75 15.89-6.002 6.86-2.503-2.86 1.505-1.317.998 1.14 4.497-5.14z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m13.746 21.599-1.618-1.85 3.763-3.292.856.979 4.002-4.574V6a.95.95 0 0 0-.579-.868l-8.775-3.8a1 1 0 0 0-.792 0l-8.775 3.8a.95.95 0 0 0-.579.868v12.488l9.445 4.198a.75.75 0 0 0 .61 0zm-9.121-15.6 1.986.86 6.375-2.76-1.987-.86zm10.762-.86-6.375 2.76L11 8.76 17.373 6zm-7.888 8.86-2.5-1.5V11l2.5 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PackageDelivered;
