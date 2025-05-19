import React from "react";
const WifiConnected_03: React.FC<
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
        d="M12 20h.012"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.25 17c2-2 5.5-2 7.5 0M18.5 14c-3.768-3.333-9-3.333-13 0M2 11c3.158-2.667 6.579-4 10-4M15 7.5s1 0 2 2c0 0 2.477-3.9 5-5.5"
      />
    </svg>
  );
};
export default WifiConnected_03;
