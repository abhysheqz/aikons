import React from "react";
const PushUpBar: React.FC<
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
        d="M3.998 10.5V7a2 2 0 0 1 2-2H7.5M20 10.5V7a2 2 0 0 0-2-2h-1.5M21.5 10.5h-3M5.5 10.5h-3M8.5 3.498h7a1 1 0 0 1 1 1V6.5l-2.5 1-2-.999-1.999 1-2.501-1V4.498a1 1 0 0 1 1-1M3.998 20.5V17a2 2 0 0 1 2-2H7.5M20 20.5V17a2 2 0 0 0-2-2h-1.5M21.5 20.5h-3M5.5 20.5h-3M8.5 13.498h7a1 1 0 0 1 1 1V16.5l-2.5.998-2-.998-2 .998-2.5-.998v-2.002a1 1 0 0 1 1-1"
      />
    </svg>
  );
};
export default PushUpBar;
