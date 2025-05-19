import React from "react";
const ElectricWire: React.FC<
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
        strokeWidth={1.5}
        d="M12 21V9h-2c-.943 0-1.414 0-1.707.293S8 10.057 8 11v10M16 21V11c0-.943 0-1.414-.293-1.707S14.943 9 14 9h-2v12M20 5v4m2-2h-4M6 7H2M10 9V6c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C8.398 3 7.932 3 7 3M14 9V6c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C15.602 3 16.068 3 17 3"
      />
    </svg>
  );
};
export default ElectricWire;
