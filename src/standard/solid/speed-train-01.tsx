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
        fill="currentColor"
        fillRule="evenodd"
        d="M1 3a1 1 0 0 1 1-1h7.333a9 9 0 0 1 5.4 1.8L20.6 8.2A6 6 0 0 1 23 13a3 3 0 0 1-3 3H2a1 1 0 0 1-1-1v-2.25h7.001a.75.75 0 0 0 .75-.75 4.75 4.75 0 0 0-4.75-4.75H1zm0 5.75v2.5h6.164a3.25 3.25 0 0 0-3.163-2.5zM19.4 9.8q.273.206.505.45H17A4.25 4.25 0 0 1 12.75 6V4.89q.407.228.783.51zM1 19a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SpeedTrain_01;
