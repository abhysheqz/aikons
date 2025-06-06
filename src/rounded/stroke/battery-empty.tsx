import React from "react";
const BatteryEmpty: React.FC<
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
        strokeWidth={1.5}
        d="M2 12c0-2.828 0-4.243.879-5.121C3.757 6 5.172 6 8 6h5c2.828 0 4.243 0 5.121.879C19 7.757 19 9.172 19 12s0 4.243-.879 5.121C17.243 18 15.828 18 13 18H8c-2.828 0-4.243 0-5.121-.879C2 16.243 2 14.828 2 12ZM19 9.5l1.027.171c.681.114 1.022.17 1.28.336a1.5 1.5 0 0 1 .573.675c.12.282.12.627.12 1.318 0 .69 0 1.036-.12 1.318a1.5 1.5 0 0 1-.572.675c-.259.165-.6.222-1.28.336L19 14.5"
      />
    </svg>
  );
};
export default BatteryEmpty;
