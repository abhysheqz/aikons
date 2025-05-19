import React from "react";
const Desk: React.FC<
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
        strokeWidth={1.5}
        d="M5 17v5m14-5v5M8 17v3m8-3v3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 8V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4M2 8h20M3 8v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8"
      />
    </svg>
  );
};
export default Desk;
