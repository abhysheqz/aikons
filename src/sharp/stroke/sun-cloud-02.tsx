import React from "react";
const SunCloud_02: React.FC<
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
        d="M17.98 12h.022a4.5 4.5 0 0 1 0 9h-10.5a5 5 0 0 1-.48-9.977M17.98 12a5.5 5.5 0 1 0-10.957-.977M17.98 12a5.47 5.47 0 0 1-1.235 3m-9.723-3.977Q7.26 11 7.502 11c1.126 0 2.165.372 3 1"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.455 5V3m0 2c-2.192 0-3.97 1.79-3.97 4m3.97-4A3.95 3.95 0 0 1 10.5 6.433M1.5 9h1.985m0 0c0 1.195.52 2.267 1.344 3M3.245 4.758l1.403 1.414"
      />
    </svg>
  );
};
export default SunCloud_02;
