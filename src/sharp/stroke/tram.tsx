import React from "react";
const Tram: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 2h9m5 0h-5m0 0-2 3M8 19l-1 3m9-3 1 3M19 19V5H5v14zM5 13h14M16.5 16H19M5 16h2.5"
      />
    </svg>
  );
};
export default Tram;
