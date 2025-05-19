import React from "react";
const Tram: React.FC<
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
        d="M5 2h9m5 0h-5m0 0-2 3M8 20l-1 2M16 20l1 2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 13v-1c0-3.3 0-4.95 1.025-5.975S8.7 5 12 5s4.95 0 5.975 1.025S19 8.7 19 12v1c0 3.3 0 4.95-1.025 5.975S15.3 20 12 20s-4.95 0-5.975-1.025S5 16.3 5 13Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 14s3.267 1 7 1 7-1 7-1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M16.5 17h2M5.5 8h13M5.5 17h2"
      />
    </svg>
  );
};
export default Tram;
