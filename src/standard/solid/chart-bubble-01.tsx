import React from "react";
const ChartBubble_01: React.FC<
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
        d="M3 2a1 1 0 0 1 1 1v17h17a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <circle cx={8} cy={8} r={2} fill="currentColor" />
      <circle cx={11.5} cy={15.5} r={2.5} fill="currentColor" />
      <circle cx={17.5} cy={7.5} r={3.5} fill="currentColor" />
    </svg>
  );
};
export default ChartBubble_01;
