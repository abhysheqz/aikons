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
        strokeWidth={1.5}
        d="M9 9a3 3 0 0 1 6 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 12H6L3 22h18z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M12 12v10m8-5H4" />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M12 3V2M18 9h1M5 9h1M16.242 4.757l.707-.707M7.05 4.05l.707.707"
      />
    </svg>
  );
};
export default SolarPanel_03;
