import React from "react";
const SpeedTrain_02: React.FC<
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
        d="M2 3h8l10.84 7.227A2.605 2.605 0 0 1 19.394 15H2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 11h9l5 4M8 7h8M2 18h20M18 18v3m-6-3v3m-6-3v3"
      />
    </svg>
  );
};
export default SpeedTrain_02;
