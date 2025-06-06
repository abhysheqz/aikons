import React from "react";
const Lake: React.FC<
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
        d="M2 21.968c.95 0 1.889.087 2.678-.528.774-.604 2.005-.584 2.749.044.81.685 2.34.665 3.17.02.804-.628 2.024-.7 2.83-.02.884.747 2.373.64 3.251-.044.774-.604 2.005-.584 2.749.044.716.605 1.693.484 2.573.484M2 17.968c.95 0 1.889.087 2.678-.528.774-.604 2.005-.584 2.749.044.81.685 2.34.665 3.17.02.804-.628 2.024-.7 2.83-.02.884.747 2.373.64 3.251-.044.774-.604 2.005-.584 2.749.044.716.605 1.693.484 2.573.484M2 14h20M6 14V6.64M3 5.5C4 5.5 5 4 6 3c1 1 2 2.5 3 2.5M6 6c-.25.667-1.5 2.5-3 2.5M6 6c.25.667 1.5 2.5 3 2.5M6 6V3.658"
      />
      <circle
        cx={17.5}
        cy={4.5}
        r={2.5}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default Lake;
