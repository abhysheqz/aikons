import React from "react";
const RotateBottomRight: React.FC<
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
        d="M15 17c3.3 0 4.95 0 5.975-1.025S22 13.3 22 10s0-4.95-1.025-5.975S18.3 3 15 3s-4.95 0-5.975 1.025S8 6.7 8 10s0 4.95 1.025 5.975S11.7 17 15 17M2 14.42l1.11-1.346C3.701 12.358 3.996 12 4.364 12v1c0 3.771 0 5.657 1.171 6.828S8.592 21 12.364 21H13"
      />
    </svg>
  );
};
export default RotateBottomRight;
