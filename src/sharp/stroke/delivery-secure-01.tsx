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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 11V8H2v14h10"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m2 8 3-6h14l3 6M12 8V2M9 12h6M20.5 16.5V15a2 2 0 1 0-4 0v1.5m-1.5 0h7V22h-7z"
      />
    </svg>
  );
};
export default DeliverySecure_01;
