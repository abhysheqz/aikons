import React from "react";
const DeliveryBox_01: React.FC<
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
        d="M19.513 1.25H4.48L1.25 7.803V22c0 .414.336.75.75.75h20a.75.75 0 0 0 .75-.75V7.803zm.755 6-1.973-4h-5.31v4zm-9.257 0v-4H5.7l-1.974 4zM9 13h6v-2H9z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DeliveryBox_01;
