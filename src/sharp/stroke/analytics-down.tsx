import React from "react";
const AnalyticsDown: React.FC<
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
        d="M17 18v-2M12 18v-3M7 18v-5M21 3v18H3V3z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.361 6.651c2.39 2.81 7.636 4.76 10.831 4.31m-1.987-2.536 2.469 2.447-2.47 2.49"
      />
    </svg>
  );
};
export default AnalyticsDown;
