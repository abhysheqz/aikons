import React from "react";
const SmartPhoneLandscape: React.FC<
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
        strokeWidth={2}
        d="M19 12.004h.01"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 10.5v3c0 2.357 0 3.535.732 4.268S4.643 18.5 7 18.5h10c2.357 0 3.535 0 4.268-.732C22 17.035 22 15.857 22 13.5v-3c0-2.357 0-3.536-.732-4.268C20.535 5.5 19.357 5.5 17 5.5H7c-2.357 0-3.536 0-4.268.732S2 8.143 2 10.5"
      />
    </svg>
  );
};
export default SmartPhoneLandscape;
