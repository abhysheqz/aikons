import React from "react";
const SolarPanel_03: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.256 12H6.744a1 1 0 0 0-.958.713l-2.4 8A1 1 0 0 0 4.344 22h15.312a1 1 0 0 0 .958-1.287l-2.4-8a1 1 0 0 0-.958-.713Z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M12 12v10m8-5H4" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M9 9a3 3 0 0 1 6 0m-3-6V2m6 7h1M5 9h1m10-4 1-1M7 4l1 1"
      />
    </svg>
  );
};
export default SolarPanel_03;
