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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 22V8h20v14z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m2 8 3-6h14l3 6M12 8V2M9 12h6"
      />
    </svg>
  );
};
export default DeliveryBox_01;
