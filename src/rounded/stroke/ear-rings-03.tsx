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
      <circle cx={17} cy={7} r={4} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={7} cy={17} r={4} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 7H3M21 17H11M5 4.5c.275-1.572 3 .924 3 2.5s-2.725 4.072-3 2.5M19 14.5c-.275-1.572-3 .924-3 2.5s2.725 4.072 3 2.5"
      />
    </svg>
  );
};
export default EarRings_03;
