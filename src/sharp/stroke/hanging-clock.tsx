import React from "react";
const HangingClock: React.FC<
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
        cx={17.5}
        cy={4.5}
        r={1.5}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={17.5}
        cy={15.5}
        r={4.5}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 8h19M17.5 6v5M2 5v16M2 20C2 13.373 7.373 8 14 8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m18.5 16.5-1-.5v-2"
      />
    </svg>
  );
};
export default HangingClock;
