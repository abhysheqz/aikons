import React from "react";
const Hospital_01: React.FC<
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
        d="M1.5 22a1 1 0 0 1 1-1h19a1 1 0 1 1 0 2h-19a1 1 0 0 1-1-1M10 1a1 1 0 0 1 1 1v1.498h2V2a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V5.498h-2V7a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.5 3.5V7A2.5 2.5 0 0 0 12 8.5 2.5 2.5 0 0 0 16.5 7V3.5H18a3 3 0 0 1 3 3V22a1 1 0 0 1-1 1h-4.75v-4a1.75 1.75 0 0 0-1.75-1.75h-3A1.75 1.75 0 0 0 8.75 19v4H4a1 1 0 0 1-1-1V6.5a3 3 0 0 1 3-3zM10.25 23h3.5v-4a.25.25 0 0 0-.25-.25h-3a.25.25 0 0 0-.25.25zm-3-11.25A.75.75 0 0 1 8 11h2a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m6 0A.75.75 0 0 1 14 11h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75m-6 3A.75.75 0 0 1 8 14h2a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75m6 0A.75.75 0 0 1 14 14h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hospital_01;
