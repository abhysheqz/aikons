import React from "react";
const CoinsPound: React.FC<
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
        d="M14 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM13 20.843A7.111 7.111 0 0 1 3.157 11"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 7.873c-.125-.828-.891-1.607-1.926-1.307-1.083.314-1.575 1.907-1.083 2.902.509 1.032.753 2.032.088 3.447-.129.275-.194.413-.158.5.036.085.15.085.378.085H16m-4-3.333h3.5"
      />
    </svg>
  );
};
export default CoinsPound;
