import React from "react";
const AiNetwork: React.FC<
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
        d="M5 3h6a1 1 0 0 1 1 1v1.5M5 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2M19 21h-6a1 1 0 0 1-1-1v-1.5m7 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2M21 5v6a1 1 0 0 1-1 1h-1.5M20 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3 19v-6a1 1 0 0 1 1-1h1.5M4 19a1 1 0 1 0-2 0 1 1 0 0 0 2 0"
      />
      <rect
        width={13}
        height={13}
        x={5.5}
        y={5.5}
        stroke="currentColor"
        strokeWidth={1.5}
        rx={2}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 9.5v5m-2.5 0-1.5-5h-1l-1.5 5m.45-1.5h3.1"
      />
    </svg>
  );
};
export default AiNetwork;
