import React from "react";
const HangingClock: React.FC<
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
        d="M17.5 2.25a2.25 2.25 0 0 0-1 4.266V7H3V6a1 1 0 0 0-2 0v15a1 1 0 1 0 2 0v-1C3 13.925 7.925 9 14 9h2.5v1.345a5.252 5.252 0 0 0 1 10.405 5.25 5.25 0 0 0 1-10.405V9H20a1 1 0 1 0 0-2h-1.5v-.484a2.25 2.25 0 0 0-1-4.266m0 11a.75.75 0 0 1 .75.75v1.537l.585.292a.75.75 0 1 1-.67 1.342l-1-.5A.75.75 0 0 1 16.75 16v-2a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HangingClock;
