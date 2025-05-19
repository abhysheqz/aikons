import React from "react";
const BedBunk: React.FC<
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
        d="M17 2a1 1 0 0 1 1 1v3h3V3a1 1 0 1 1 2 0v18a1 1 0 1 1-2 0v-1h-3v1a1 1 0 1 1-2 0v-1H3v1a1 1 0 1 1-2 0V3a1 1 0 0 1 2 0v3h1.5V4.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V6H16V3a1 1 0 0 1 1-1M3 11v4h1.5v-1.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V15H16v-4zm18-3v2h-3V8zm0 4h-3v1h3zm0 3h-3v3h3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BedBunk;
