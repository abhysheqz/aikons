import React from "react";
const BitcoinGraph: React.FC<
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
        d="M13.5 9.5h-4v12h4z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M20.5 12.5v9h-4v-9" />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M17.438 9.167V3.833m1.562 0V2.5m0 8V9.167M17.438 6.5h3.125m0 0c.517 0 .937.448.937 1v.667c0 .552-.42 1-.937 1H16.5M20.563 6.5c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1H16.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M6.5 12.5h-4v9h4z"
      />
    </svg>
  );
};
export default BitcoinGraph;
