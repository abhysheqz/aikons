import React from "react";
const Acceleration: React.FC<
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
        d="m17 14 3-.5m0 0-.5-3m.5 3L15 10M3 20V9.843a1 1 0 0 1 1.545-.839l15.627 10.158c.834.542.45 1.838-.545 1.838H4a1 1 0 0 1-1-1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
      />
    </svg>
  );
};
export default Acceleration;
