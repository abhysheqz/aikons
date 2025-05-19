import React from "react";
const ServerStack_01: React.FC<
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
        d="M19 4H5c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 5.602 2 6.068 2 7s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 10 4.068 10 5 10h14c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C22 8.398 22 7.932 22 7s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C20.398 4 19.932 4 19 4M19 14H5c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C2 15.602 2 16.068 2 17s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 20 4.068 20 5 20h14c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C22 18.398 22 17.932 22 17s0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C20.398 14 19.932 14 19 14"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 17h.01M10 17h.01M6 7h.01M10 7h.01"
      />
    </svg>
  );
};
export default ServerStack_01;
