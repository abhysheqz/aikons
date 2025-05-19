import React from "react";
const MilkOat: React.FC<
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
        d="M5 5.004V2h10.5v3.004L18 8v2M8 8v14M8 8 5 5 2 8v14h6M8 8h9.459M8 22h3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20.64 20.64c1.53-1.528 2.077-3.46 0-5.536s-5.536-2.768-6.92-1.384m6.92 6.92c-1.528 1.53-3.46 2.077-5.536 0s-2.768-5.536-1.384-6.92m6.92 6.92-6.92-6.92"
      />
    </svg>
  );
};
export default MilkOat;
