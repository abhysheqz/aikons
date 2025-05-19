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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 3h7.333a8 8 0 0 1 4.8 1.6L20 9a5 5 0 0 1 2 4 2 2 0 0 1-2 2H2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 8h2a4 4 0 0 1 4 4H2M12 3.5V6a5 5 0 0 0 5 5h4.5M2 19h20M18 19v2m-6-2v2m-6-2v2"
      />
    </svg>
  );
};
export default SpeedTrain_01;
