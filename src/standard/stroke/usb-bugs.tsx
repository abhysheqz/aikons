import React from "react";
const UsbBugs: React.FC<
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
        d="M13.5 7.75v-4.5a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v4.5m2.998-3h1M15 10.25v-1.5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v8.5c0 2.05 1.234 3.728 3 4.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 17.25H19m-7.5 0H10m1.5-2s-.5-1-1.5-1m7.5 1s.5-1 1.5-1m-7.5 5s-.5 1-1.5 1m7.5-1s.5 1 1.5 1m-4.5 1a3 3 0 0 1-3-3v-2a3 3 0 1 1 6 0v2a3 3 0 0 1-3 3"
      />
    </svg>
  );
};
export default UsbBugs;
