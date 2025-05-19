import React from "react";
const ArrowTurnForward: React.FC<
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
        d="M15.948 9.868 20 14.238l-4.052 4.264M13.075 5.499H8.059C5.817 5.499 4 7.455 4 9.869c0 2.413 1.817 4.369 4.06 4.369h11.546"
      />
    </svg>
  );
};
export default ArrowTurnForward;
