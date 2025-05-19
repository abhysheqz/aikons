import React from "react";
const TorriGate: React.FC<
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
        d="M6 8v13M18 8v13M3 8h18M3 12h18M10 8v4m4-4v4M20 3c-1.46 2.963-4.494 5-8 5-3.505 0-6.54-2.037-8-5"
      />
    </svg>
  );
};
export default TorriGate;
