import React from "react";
const WifiOff_02: React.FC<
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
        strokeWidth={2}
        d="M12 18.5h.012"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.5 15.5c1.495-1.495 3.617-1.872 5.5-1.133M5.5 12.5c1.34-1.34 2.62-1.998 4-2.376M18.5 12.5c-1.493-1.32-3.215-2.226-5-2.5M2 9.5c1.387-1.387 2.742-2.208 4.154-2.848M22 9.5c-3.928-3.317-8.264-4.571-12.5-3.762M2 2l20 20"
      />
    </svg>
  );
};
export default WifiOff_02;
