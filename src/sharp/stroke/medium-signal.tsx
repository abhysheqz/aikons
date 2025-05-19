import React from "react";
const MediumSignal: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M17 19V5h3v14zM12 8h-1.5v11H12m0-11h1.5v11H12m0-11v11M5.5 12H4v7h1.5m0-7H7v7H5.5m0-7v7"
      />
    </svg>
  );
};
export default MediumSignal;
