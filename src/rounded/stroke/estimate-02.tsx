import React from "react";
const Estimate_02: React.FC<
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
        d="M17.5 11V7.3c0-2.263 0-3.394-.775-4.097-.776-.703-2.023-.703-4.52-.703h-4.41c-2.497 0-3.744 0-4.52.703S2.5 5.037 2.5 7.3v6.4c0 2.263 0 3.394.775 4.097.776.703 2.023.703 4.52.703H11"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.5 6.5h9M5.5 10.5h1M9.5 10.5h1M13.5 10.5h1M5.5 14.5h1M9.5 14.5h1"
      />
      <circle
        cx={17.5}
        cy={17.5}
        r={4}
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18.5 18-1-.5V16"
      />
    </svg>
  );
};
export default Estimate_02;
