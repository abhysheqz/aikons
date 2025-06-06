import React from "react";
const Tap_02: React.FC<
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
        d="M16.495 22v-2l.673-1.664c.588-1.255 1.391-3.712.268-4.868C15.75 11.73 13.443 11.477 12 11.5v-5a1.5 1.5 0 0 0-3 0V12m0 0v3m0-3s-2.538 1-2.937 2.867c-.35 1.633.872 2.96.872 2.96L8.97 20v2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.5 6a4 4 0 1 1 8 0"
      />
    </svg>
  );
};
export default Tap_02;
