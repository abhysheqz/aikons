import React from "react";
const AirplaneSeat_02: React.FC<
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
        d="M19.5 7h-15c.588-2.35 2.7-4 5.123-4h4.754A5.28 5.28 0 0 1 19.5 7M18 16.5V7h2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-3 0M6 19V7h12v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2M3 16.5V8a1 1 0 0 1 1-1h2v9.5a1.5 1.5 0 0 1-3 0"
      />
    </svg>
  );
};
export default AirplaneSeat_02;
