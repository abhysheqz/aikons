import React from "react";
const ShippingTruck_02: React.FC<
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
        d="M19.5 17.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM9.5 17.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 17.5h-5m5.5-2V7c0-1.414 0-2.121-.44-2.56C14.122 4 13.415 4 12 4H5c-1.414 0-2.121 0-2.56.44C2 4.878 2 5.585 2 7v8c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201m11-11h1.801c.83 0 1.245 0 1.589.195.344.194.557.55.984 1.262l1.699 2.83c.212.354.318.532.373.728.054.197.054.403.054.816V15c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201"
      />
    </svg>
  );
};
export default ShippingTruck_02;
