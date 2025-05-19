import React from "react";
const TimeSetting_03: React.FC<
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
        d="M13.12 1.956a1.75 1.75 0 0 0-2.24 0L8.794 3.692a.25.25 0 0 1-.16.058H5.496a1.75 1.75 0 0 0-1.75 1.75v3.138a.25.25 0 0 1-.058.16L1.955 10.88a1.75 1.75 0 0 0 0 2.239L3.688 15.2a.25.25 0 0 1 .058.16V18.5c0 .966.783 1.75 1.75 1.75h3.138a.25.25 0 0 1 .16.057l2.086 1.737a1.75 1.75 0 0 0 2.24-.001l2.082-1.735a.25.25 0 0 1 .16-.058H18.5a1.75 1.75 0 0 0 1.75-1.75V15.36a.25.25 0 0 1 .058-.16l1.732-2.082a1.75 1.75 0 0 0 0-2.238l-1.732-2.083a.25.25 0 0 1-.058-.16V5.5a1.75 1.75 0 0 0-1.75-1.75h-3.138a.25.25 0 0 1-.16-.058zM13 7.5a1 1 0 1 0-2 0V12a1 1 0 0 0 .553.894l3 1.5a1 1 0 1 0 .894-1.788L13 11.382z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TimeSetting_03;
