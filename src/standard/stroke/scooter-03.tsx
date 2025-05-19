import React from "react";
const Scooter_03: React.FC<
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
      <circle
        cx={12}
        cy={4}
        r={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 4H6M18 4h-4M15 20h1.438a2 2 0 0 0 1.94-2.485l-2-8A2 2 0 0 0 14.439 8H9.562a2 2 0 0 0-1.94 1.515l-2 8A2 2 0 0 0 7.561 20H9M12 18v4"
      />
    </svg>
  );
};
export default Scooter_03;
