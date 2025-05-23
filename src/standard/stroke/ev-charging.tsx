import React from "react";
const EvCharging: React.FC<
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
        d="M3 22V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v18M2 22h15M3 11h13M20.001 11l1-2.473 1-.527V5L19 7l.001 4zM19.478 11c.2 1.386.667 2.97.477 4.38-.171 1.277-1.182 2.308-2.512 2.561C17.133 18 16.755 18 16 18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10 13.5-2 3h3l-2 3"
      />
    </svg>
  );
};
export default EvCharging;
