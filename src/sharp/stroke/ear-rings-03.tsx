import React from "react";
const EarRings_03: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 7h10M4.5 5l1-1L8 7l-2.5 3-1-1"
      />
      <circle cx={17} cy={7} r={4} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={7} cy={17} r={4} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 17H11M19.5 15l-1-1-2.5 3 2.5 3 1-1"
      />
    </svg>
  );
};
export default EarRings_03;
