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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 3h7.333a8 8 0 0 1 4.8 1.6L20 9a5 5 0 0 1 2 4 2 2 0 0 1-2 2H2M2 19h20M18 19v2m-6-2v2m-6-2v2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 11h7.948a3 3 0 0 1 1.874.657L16 15M10 7h7"
      />
    </svg>
  );
};
export default SpeedTrain_02;
