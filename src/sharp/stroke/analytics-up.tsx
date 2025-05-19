import React from "react";
const AnalyticsUp: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 18v-2M12 18v-3M17 18v-5M21 3v18H3V3z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6 12c3.712.262 8.834-2.166 10.71-4.788m-3.253-.287 3.475-.05.05 3.506"
      />
    </svg>
  );
};
export default AnalyticsUp;
