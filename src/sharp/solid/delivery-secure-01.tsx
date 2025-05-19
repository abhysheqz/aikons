import React from "react";
const DeliverySecure_01: React.FC<
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
        d="M18.5 12.25A2.75 2.75 0 0 0 15.75 15v.75h-1.5v7h8.5v-7h-1.5V15a2.75 2.75 0 0 0-2.75-2.75M19.75 15v.75h-2.5V15a1.25 1.25 0 1 1 2.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.513 1.25H4.48L1.25 7.803V22c0 .414.336.75.75.75h10.75v-8.5h1.566a4.251 4.251 0 0 1 8.368 0h.066V7.803zm.755 6-1.973-4h-5.31v4zm-9.257 0v-4H5.7l-1.974 4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DeliverySecure_01;
