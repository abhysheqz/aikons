import React from "react";
const TrafficLight: React.FC<
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
        d="M13.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M13.5 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 15V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2M12 17v5M17 4h3.001L20 5.5l-3 2M17 11h3.001L20 12.5l-3 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.001 4H4v1.5l3.001 2M7.001 11H4v1.5l3.001 2"
      />
    </svg>
  );
};
export default TrafficLight;
