import React from "react";
const Pickup_02: React.FC<
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
        d="M15 5v7h7M17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM22 15h-2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 12H2.01a.01.01 0 0 0-.01.01v5.98q0 .01.01.01H5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9 18h3m0 0h3m-3 0V5.01a.01.01 0 0 1 .01-.01h5.984a.01.01 0 0 1 .009.005l3.995 6.992.001.002v.002l.001.003v5.986a.01.01 0 0 1-.01.01H19"
      />
    </svg>
  );
};
export default Pickup_02;
