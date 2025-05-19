import React from "react";
const DeliveryReturn_01: React.FC<
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
        d="M19.513 1.25H4.48L1.25 7.803V22c0 .414.336.75.75.75h14.02a3 3 0 0 0-.02-6h-2.086l1.592 1.592-1.415 1.414-4.005-4.006 4.005-4.005 1.415 1.414-1.592 1.591H16a5 5 0 0 1 4 8h2a.75.75 0 0 0 .75-.75V7.803zm.755 6-1.973-4h-5.31v4zm-9.257 0v-4H5.7l-1.974 4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DeliveryReturn_01;
