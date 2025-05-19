import React from "react";
const Backpack_03: React.FC<
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
        d="M19 15h3v2c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 20 19.932 20 19 20M5 15H2v2c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 20 4.068 20 5 20"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19.002 9V5H5v4a4 4 0 0 0 4 4h6.002a4 4 0 0 0 4-4Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18 11 1 2v9H5v-9l1-2M9 15v-2m6 2v-2"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M15 5a3 3 0 1 0-6 0" />
    </svg>
  );
};
export default Backpack_03;
