import React from "react";
const TwinTower: React.FC<
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
        d="m9 19 3-4 3 4m-6-5h6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M5.5 4V2M18.5 4V2M5.5 22v-2M18.5 22v-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 13v9h7v-9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1M15 13v9h7v-9a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1M3 9v3h5V9a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1M16 9v3h5V9a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1M4 5v3h3V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1M17 5v3h3V5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1"
      />
    </svg>
  );
};
export default TwinTower;
