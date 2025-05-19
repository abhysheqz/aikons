import React from "react";
const BaseballBat: React.FC<
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
        d="M5.46 20 20.556 8.69a3.738 3.738 0 1 0-5.246-5.247L4 18.541M10 17l-3-3"
      />
      <circle
        cx={2.5}
        cy={2.5}
        r={2.5}
        stroke="currentColor"
        strokeWidth={1.5}
        transform="matrix(-1 0 0 1 21 16)"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5.313 18.686a2.343 2.343 0 0 1 0 3.314l-3.314-3.314a2.343 2.343 0 0 1 3.314 0Z"
      />
    </svg>
  );
};
export default BaseballBat;
