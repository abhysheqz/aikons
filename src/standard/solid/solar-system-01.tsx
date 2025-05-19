import React from "react";
const SolarSystem_01: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3c-.942 0-1.85.145-2.7.412a1 1 0 1 1-.6-1.908A11 11 0 0 1 12 1c6.075 0 11 4.925 11 11 0 2.234-.667 4.314-1.812 6.05a1 1 0 0 1-1.67-1.1A8.95 8.95 0 0 0 21 12a9 9 0 0 0-9-9M4.028 5.88a1 1 0 0 1 .321 1.377A8.95 8.95 0 0 0 3 12a9 9 0 0 0 9 9c.942 0 1.85-.145 2.7-.412a1 1 0 1 1 .6 1.908A11 11 0 0 1 12 23C5.925 23 1 18.075 1 12c0-2.126.604-4.114 1.65-5.798a1 1 0 0 1 1.378-.322"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M16.25 19a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M5.25 15a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 8a4 4 0 0 0-3.92 4.801 1 1 0 0 1-1.96.398A6 6 0 1 1 12 18a1 1 0 1 1 0-2 4 4 0 0 0 0-8"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.75 12c0-.69.56-1.25 1.25-1.25h.009a1.25 1.25 0 0 1 0 2.5H12c-.69 0-1.25-.56-1.25-1.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SolarSystem_01;
