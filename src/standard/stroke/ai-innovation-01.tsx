import React from "react";
const AiInnovation_01: React.FC<
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
        d="M18.5 5h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M15 11v1.5m3-1.5v1.5m-3-9V5m3-1.5V5m-4.5 1.5H12m1.5 3H12m9-3h-1.5m1.5 3h-1.5M11 2C6.582 2 3 5.545 3 9.919c0 1.493.417 2.89 1.143 4.081M16 16H6l.544 1.633A2 2 0 0 0 8.442 19h5.117a2 2 0 0 0 1.897-1.367z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14 19-.544 1.633A2 2 0 0 1 11.559 22h-1.117a2 2 0 0 1-1.898-1.367L8 19"
      />
    </svg>
  );
};
export default AiInnovation_01;
