import React from "react";
const ElectricTower_02: React.FC<
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
        d="M8.25 2A.75.75 0 0 1 9 1.25h6a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75H9A.75.75 0 0 1 8.25 7zm1.5.75v3.5h4.5v-3.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.898 22.448a.75.75 0 0 0 .602.302h15a.75.75 0 0 0 .718-.965l-4.5-15A.75.75 0 0 0 15 6.25H9a.75.75 0 0 0-.718.534l-4.5 15a.75.75 0 0 0 .116.664m1.61-1.198 4.05-13.5h4.884l4.05 13.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 22a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75M9.576 1.52a.75.75 0 0 1-.096 1.056L5.072 6.25h13.857l-4.41-3.674a.75.75 0 0 1 .961-1.152l6 5a.75.75 0 0 1 .27.576v2a.75.75 0 0 1-1.5 0V7.75H3.75V9a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .27-.576l6-5a.75.75 0 0 1 1.056.096"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.147 9.12a.75.75 0 0 0-1.027-.266l-8.5 5a.75.75 0 0 0 .056 1.323l11.5 5.5a.75.75 0 1 0 .648-1.354L8.595 14.432l7.285-4.286a.75.75 0 0 0 .266-1.026"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.854 9.12a.75.75 0 0 1 1.026-.266l8.5 5a.75.75 0 0 1-.056 1.323l-11.5 5.5a.75.75 0 1 1-.648-1.354l10.229-4.891-7.285-4.286a.75.75 0 0 1-.266-1.026"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ElectricTower_02;
