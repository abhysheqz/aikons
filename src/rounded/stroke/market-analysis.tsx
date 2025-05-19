import React from "react";
const MarketAnalysis: React.FC<
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
        d="M14 16V8c0-.943 0-1.414-.293-1.707S12.943 6 12 6s-1.414 0-1.707.293S10 7.057 10 8v8c0 .943 0 1.414.293 1.707S11.057 18 12 18s1.414 0 1.707-.293S14 16.943 14 16M21 9V7c0-.943 0-1.414-.293-1.707S19.943 5 19 5s-1.414 0-1.707.293S17 6.057 17 7v2c0 .943 0 1.414.293 1.707S18.057 11 19 11s1.414 0 1.707-.293S21 9.943 21 9M7 14v-2c0-.943 0-1.414-.293-1.707S5.943 10 5 10s-1.414 0-1.707.293S3 11.057 3 12v2c0 .943 0 1.414.293 1.707S4.057 16 5 16s1.414 0 1.707-.293S7 14.943 7 14M12 21v-3M19 13v-2M12 6V3M19 5V3M5 18v-2M5 10V8"
      />
    </svg>
  );
};
export default MarketAnalysis;
