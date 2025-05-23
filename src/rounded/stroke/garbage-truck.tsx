import React from "react";
const GarbageTruck: React.FC<
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
      <circle cx={17} cy={18} r={2} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={7} cy={18} r={2} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M11 9v3M7 10v2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 4h-2m0 0H9.485c-1.226 0-1.84 0-2.39.228-.552.229-.985.662-1.852 1.53L3.464 7.535c-.722.722-1.083 1.083-1.274 1.543-.19.46-.19.97-.19 1.992V13c0 2.357 0 3.535.732 4.268.487.487 1.171.65 2.268.704M15 4v4c0 1.886 0 2.828.586 3.414S17.114 12 19 12h3v1c0 2.357 0 3.535-.732 4.268-.487.487-1.171.65-2.268.704M9 18h6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 7h1.7c1.358 0 2.037 0 2.59.354.553.353.875.994 1.519 2.276L22 12"
      />
    </svg>
  );
};
export default GarbageTruck;
