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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.5 7H13M5 4.5l.5-.5L8 7l-2.5 3-.5-.5"
      />
      <circle cx={17} cy={7} r={4} stroke="currentColor" strokeWidth={1.5} />
      <circle cx={7} cy={17} r={4} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.5 17H11M19 14.5l-.5-.5-2.5 3 2.5 3 .5-.5"
      />
    </svg>
  );
};
export default EarRings_03;
