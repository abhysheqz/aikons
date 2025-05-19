import React from "react";
const WindPower_02: React.FC<
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
        d="M3.463 2.325a3.53 3.53 0 0 1 5.074 0L12 5.875l3.463-3.55a3.53 3.53 0 0 1 5.074 0 .75.75 0 0 1 0 1.048L15.047 9l5.49 5.627a.75.75 0 0 1 0 1.047 3.53 3.53 0 0 1-5.074 0L12 12.124l-3.463 3.55a3.53 3.53 0 0 1-5.074 0 .75.75 0 0 1 0-1.047L8.953 9l-5.49-5.627a.75.75 0 0 1 0-1.048M10.13 9a.75.75 0 0 1 .15.328c.136.717.712 1.28 1.435 1.399q.156.025.285.11a.75.75 0 0 1 .286-.11 1.75 1.75 0 0 0 1.433-1.4A.75.75 0 0 1 13.87 9a.75.75 0 0 1-.15-.329 1.75 1.75 0 0 0-1.434-1.398.75.75 0 0 1-.286-.11.75.75 0 0 1-.286.11 1.75 1.75 0 0 0-1.433 1.398.75.75 0 0 1-.151.329"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 7.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M8.75 9a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m14.286 16.617.46 5.319a.75.75 0 0 1-.746.814h-4a.75.75 0 0 1-.747-.814l.461-5.32L12 14.273z"
      />
    </svg>
  );
};
export default WindPower_02;
