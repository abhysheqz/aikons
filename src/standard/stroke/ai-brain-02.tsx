import React from "react";
const AiBrain_02: React.FC<
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
        d="M4 16.5a3 3 0 0 0 3 3 2.5 2.5 0 0 0 5 0 2.5 2.5 0 1 0 5 0 3 3 0 0 0 2.567-4.554 3.001 3.001 0 0 0 0-5.893A3 3 0 0 0 17 4.5a2.5 2.5 0 1 0-5 .001 2.5 2.5 0 0 0-5 0 3 3 0 0 0-2.567 4.553 3 3 0 0 0 0 5.893A3 3 0 0 0 4 16.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 9h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1M10.5 15v1.5m3-1.5v1.5m-3-9V9m3-1.5V9M9 10.5H7.5m1.5 3H7.5m9-3H15m1.5 3H15"
      />
    </svg>
  );
};
export default AiBrain_02;
