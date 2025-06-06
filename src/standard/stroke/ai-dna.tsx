import React from "react";
const AiDna: React.FC<
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
        d="M7.5 14C3 11.6 3 10.4 3 10s0-1.6 4.5-4m0 8C3 16.4 3 17.2 3 18m4.5-4c4.5-2.4 4.5-3.6 4.5-4s0-1.6-4.5-4M12 2c0 .8 0 1.6-4.5 4m0 0L5.313 4.744C3 3.281 3 2.641 3 2M18.5 14h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1M15 20v1.5m3-1.5v1.5m-3-9V14m3-1.5V14m-4.5 1.5H12m1.5 3H12m9-3h-1.5m1.5 3h-1.5"
      />
    </svg>
  );
};
export default AiDna;
