import React from "react";
const SpeedTrain_01: React.FC<
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
        d="M2 3h8l10.84 7.226A2.605 2.605 0 0 1 19.394 15H2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 8h3a3 3 0 0 1 3 3v1H2M21.5 11h-6.167C12.388 11 10 8.761 10 6V3M2 18h20M18 18v3m-6-3v3m-6-3v3"
      />
    </svg>
  );
};
export default SpeedTrain_01;
