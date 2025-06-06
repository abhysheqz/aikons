import React from "react";
const Cafe: React.FC<
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
        d="M18 7.792A2.5 2.5 0 0 0 19.5 5.5L18 3H6L4.5 5.5A2.5 2.5 0 0 0 6 7.792m12 0A2.5 2.5 0 0 1 14.5 5.5a2.5 2.5 0 0 1-5 0A2.5 2.5 0 0 1 6 7.792m12 0V11M6 7.792V11M3 12v5m0 0h5v4m-5-4v4M21 12v5m0 0h-5v4m5-4v4M7 14h5m5 0h-5m0 0v7m0 0h-1m1 0h1"
      />
    </svg>
  );
};
export default Cafe;
