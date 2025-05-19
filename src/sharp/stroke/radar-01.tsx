import React from "react";
const Radar_01: React.FC<
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
        strokeWidth={1.5}
        d="M16.596 16.596A6.5 6.5 0 1 1 13 5.576"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m12 12 7.071-7.071A9.97 9.97 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10a10 10 0 0 0-.832-4"
      />
    </svg>
  );
};
export default Radar_01;
