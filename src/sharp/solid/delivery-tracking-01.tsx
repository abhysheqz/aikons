import React from "react";
const DeliveryTracking_01: React.FC<
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
        d="M18 11.25c-2.63 0-4.75 2.152-4.75 4.79 0 1.52.614 2.707 1.753 3.716.686.608 2.53 2.249 2.985 2.994.491-.751 2.337-2.398 3.01-2.994 1.138-1.009 1.752-2.197 1.752-3.716 0-2.638-2.12-4.79-4.75-4.79M17.991 14c-1.1 0-1.991.895-1.991 2s.891 2 1.991 2h.018c1.1 0 1.991-.895 1.991-2s-.891-2-1.991-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.513 1.25H4.48L1.25 7.803V22c0 .414.336.75.75.75h14.017q-.21-.214-.473-.466a54 54 0 0 0-1.536-1.406c-1.414-1.253-2.258-2.832-2.258-4.838 0-3.452 2.776-6.29 6.25-6.29a6.21 6.21 0 0 1 4.75 2.202v-4.15zm.755 6-1.973-4h-5.31v4zm-9.257 0v-4H5.7l-1.974 4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DeliveryTracking_01;
