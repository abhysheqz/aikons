import React from "react";
const Simcard_01: React.FC<
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
        d="M9.509 17.988 7.5 15.994 9.509 14m5.006.024 1.985 1.97L14.479 18"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 19V5a3 3 0 0 1 3-3h9.172a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 21 7.828V19a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3"
      />
    </svg>
  );
};
export default Simcard_01;
