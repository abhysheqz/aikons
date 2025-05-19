import React from "react";
const ShipmentTracking: React.FC<
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
        d="M12.006 22H2.012V12h9.994z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.5 15h3M18.002 14v8h-3.997"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.008 6h-.01"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22.01 5.999c-.15 2.085-1.317 3.474-4.013 6.001-3.2-3.046-3.913-4.327-3.982-6.008 0-2.48 2.049-3.992 3.936-3.992 2.157 0 3.95 1.645 4.06 3.999Z"
      />
    </svg>
  );
};
export default ShipmentTracking;
