import React from "react";
const DeliveryTruck_01: React.FC<
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
        strokeWidth={1.5}
        d="M19.462 17.5c0 1.38-1.137 2.5-2.54 2.5-1.402 0-2.54-1.12-2.54-2.5s1.138-2.5 2.54-2.5 2.54 1.12 2.54 2.5ZM9.302 17.5c0 1.38-1.137 2.5-2.54 2.5-1.402 0-2.54-1.12-2.54-2.5S5.36 15 6.763 15s2.54 1.12 2.54 2.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M1.683 7h6.095m-6.095 3h4.064"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M.967 4.004H14.85v12.085M1.724 12.76v4.76h2.562m5.112 0h5.106m5.118 0h2.336v-4.161c.17-3.95-3.086-6.854-6.368-6.85"
      />
    </svg>
  );
};
export default DeliveryTruck_01;
