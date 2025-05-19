import React from "react";
const LiveStreaming_02: React.FC<
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
      <circle
        cx={12}
        cy={12}
        r={2}
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M7.5 8C6.5 9 6 10.5 6 12s.5 3 1.5 4M4.5 6C3 7.5 2 9.5 2 12s1 4.5 2.5 6M16.5 16c1-1 1.5-2.5 1.5-4s-.5-3-1.5-4M19.5 18c1.5-1.5 2.5-3.5 2.5-6s-1-4.5-2.5-6"
      />
    </svg>
  );
};
export default LiveStreaming_02;
