import React from "react";
const IrisScan: React.FC<
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
        d="M1.5 4.5a3 3 0 0 1 3-3H8a1 1 0 0 1 0 2H4.5a1 1 0 0 0-1 1V8a1 1 0 0 1-2 0zm13.5-2a1 1 0 0 1 1-1h3.5a3 3 0 0 1 3 3V8a1 1 0 1 1-2 0V4.5a1 1 0 0 0-1-1H16a1 1 0 0 1-1-1M2.5 15a1 1 0 0 1 1 1v3.5a1 1 0 0 0 1 1H8a1 1 0 1 1 0 2H4.5a3 3 0 0 1-3-3V16a1 1 0 0 1 1-1m19 0a1 1 0 0 1 1 1v3.5a3 3 0 0 1-3 3H16a1 1 0 1 1 0-2h3.5a1 1 0 0 0 1-1V16a1 1 0 0 1 1-1M6.3 14.134a1 1 0 0 1 1.367.365A5 5 0 0 0 11.998 17a5 5 0 0 0 4.332-2.5 1 1 0 0 1 1.731 1 7 7 0 0 1-6.063 3.5 7 7 0 0 1-6.063-3.5 1 1 0 0 1 .365-1.366M5 12a7 7 0 0 1 7-7 1 1 0 0 1 1 1 2 2 0 0 0 3.2 1.6 1 1 0 0 1 1.4.2A6.97 6.97 0 0 1 19 12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 12a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default IrisScan;
