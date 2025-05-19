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
        stroke="currentColor"
        strokeWidth={1.5}
        d="m2 8 3-6h14l3 6M12 8V2M9 12h6"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 13V8H2v14h17a3 3 0 1 0 0-6h-3.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18 13.5 15.5 16l2.5 2.5"
      />
    </svg>
  );
};
export default DeliveryReturn_01;
