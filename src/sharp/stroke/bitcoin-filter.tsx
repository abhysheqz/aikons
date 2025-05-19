import React from "react";
const BitcoinFilter: React.FC<
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
        d="M9.621 9.485V3.497m1.874 0V2m0 8.982V9.485M9.622 6.49h3.749m0 0c.62 0 1.124.503 1.124 1.123v.748c0 .62-.503 1.123-1.124 1.123H8.497M13.37 6.49c.62 0 1.124-.503 1.124-1.123V4.62c0-.62-.503-1.123-1.124-1.123H8.497"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.978 7.072H3.1a.1.1 0 0 0-.1.099v3.817l6.005 4.995.948 5.936a.1.1 0 0 0 .145.073l3.889-2.022.997-3.987 6.014-4.988V7.057a.1.1 0 0 0-.1-.1l-3.907.037"
      />
    </svg>
  );
};
export default BitcoinFilter;
