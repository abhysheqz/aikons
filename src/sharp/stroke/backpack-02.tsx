import React from "react";
const Backpack_02: React.FC<
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
        d="M19 14h3v2c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 19 19.932 19 19 19M5 14H2v2c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 19 4.068 19 5 19M18.498 11l.5 11h-14l.5-11"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15 5a3 3 0 1 0-6 0M19.002 9V5H5v4a4 4 0 0 0 4 4h6.002a4 4 0 0 0 4-4Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 10.001h.009"
      />
    </svg>
  );
};
export default Backpack_02;
