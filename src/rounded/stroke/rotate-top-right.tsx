import React from "react";
const RotateTopRight: React.FC<
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
        d="M7 15c0 3.3 0 4.95 1.025 5.975S10.7 22 14 22s4.95 0 5.975-1.025S21 18.3 21 15s0-4.95-1.025-5.975S17.3 8 14 8 9.05 8 8.025 9.025 7 11.7 7 15M9.58 2l1.346 1.11c.716.591 1.074.886 1.074 1.254h-1c-3.771 0-5.657 0-6.828 1.171S3 8.592 3 12.364V13"
      />
    </svg>
  );
};
export default RotateTopRight;
