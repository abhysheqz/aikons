import React from "react";
const SwipeUp_05: React.FC<
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
        d="M18 22v-1.5l1.123-1.404a4 4 0 0 0 .877-2.5V12.5a2 2 0 0 0-2-2h-1M8 22v-1.5l-4.611-6.664a1.74 1.74 0 0 1-.008-2.183 1.736 1.736 0 0 1 2.487-.234L8 13.5v-10a1.5 1.5 0 1 1 3 0v5m0 0v2m0-2h1a2 2 0 0 1 2 2v1m3 1v-1a2 2 0 0 0-2-2h-1M18.5 8V2.667M16 4.5 18.5 2 21 4.5"
      />
    </svg>
  );
};
export default SwipeUp_05;
